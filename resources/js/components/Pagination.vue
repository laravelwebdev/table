<template>
    <div class="bg-20 border-t border-gray-200 dark:border-gray-700 rounded-b">
        <pagination-links 
            :is="paginationComponent"
            :all-matching-resource-count="allMatchingResourceCount"
            :current-resource-count="modelValue.data.length"
            :next="hasNextPage"
            :page="currentPage"
            :pages="totalPages"
            :per-page="perPage"
            :previous="hasPreviousPage"
            :resource-count-label="resourceCountLabel"
            @page="selectPage"
        >
            <span v-if="resourceCountLabel"
                :class="{ 'ml-auto': paginationComponent === 'pagination-links'}"
                class="text-sm text-80 px-4"
            >
                {{ resourceCountLabel }}
            </span>
        </pagination-links>
    </div>
</template>

<script>
import {Paginatable, PerPageable} from 'laravel-nova';

export default {
    name: 'Pagination',
    props: {
        modelValue: Object,
		queryKey: '',
    },
    mixins: [
		Paginatable,
		PerPageable,
	],
    data: function () {
		return {
			allMatchingResourceCount: 0,
			perPage: 0,
			currentPage: 1,
		}
	},
    computed: {
		resourceCountLabel() {
			const first = this.perPage * (this.currentPage - 1)
			return (
					this.modelValue.data.length &&
					`${first + 1}-${first + this.modelValue.data.length} ${this.__('of')} ${
							this.allMatchingResourceCount
					}`
			)
		},
		currentPerPage() {
			return this.perPage;
		},
		totalPages() {
			return Math.ceil(this.allMatchingResourceCount / this.currentPerPage);
		},
		hasNextPage() {
			return this.modelValue && this.modelValue.next_page_url;
		},
		hasPreviousPage() {
			return this.modelValue && this.modelValue.prev_page_url;
		},
		paginationComponent() {
			return `pagination-${Nova.config['pagination'] || 'links'}`
		},
        path(){
            return this.modelValue.path;
        }
	},
    methods: {
		selectPage(page) {
			const queryKey = this.queryKey;

			this.currentPage = page;

			Nova.request().get(this.path, {
				params: {
					[queryKey || 'page']: page
				}
			}).then(response => {
				let cards = response.data;

				if(response.data.cards){
					cards = response.data.cards;
				}

				const paginationCard = cards.find(card =>
					card.queryKey === queryKey || (queryKey === '' && card.component === 'nova-table-card')
				);

                this.$emit('update:modelValue', paginationCard.paginator);
                this.$emit('updateRows', paginationCard.rows);

				if (paginationCard.paginator !== undefined) {
					this.perPage = paginationCard.paginator.per_page;
					this.allMatchingResourceCount = paginationCard.paginator.total;
				}
				Nova.$emit('resources-loaded')
			}).catch(error => {
				console.error(error)
			})
		},
	},
    mounted() {
        this.allMatchingResourceCount = this.modelValue.total;
        this.perPage = this.modelValue.per_page;
    },
}
</script>