<?php

namespace Laravelwebdev\Table;

use Illuminate\Pagination\LengthAwarePaginator;
use Laravel\Nova\Card;

class Table extends Card
{
    public static $instanceCount = 0;

    /**
     * The visual style used for the table. Available options are 'tight' and 'default'.
     *
     * @var string
     */
    public string $style = 'table-default';

    /**
     * The width of the card (1/3, 1/2, or full).
     *
     * @var string
     */
    public $width = 'full';

    /**
     * @param array $header
     * @param array $data
     * @param string $title
     * @param array $viewAll
     */
    public function __construct(array $header = [], array $data = [], string $title = '', array $viewAll = [], string $queryKey = '')
    {
        parent::__construct();

        self::$instanceCount++;

        $this->withMeta([
            'header' =>  $header,
            'rows' =>  $data,
            'title' =>  $title,
            'viewAll' =>  $viewAll,
            'queryKey' =>  $queryKey,
            'showBorders' => false,
        ]);
    }

    public function header(array $header)
    {
        return $this->withMeta(['header' => $header]);
    }

    public function data(array $data)
    {
        return $this->withMeta(['rows' => $data]);
    }

    public function title(string $title)
    {
        return $this->withMeta(['title' => $title]);
    }

    public function viewAll(array $viewAll)
    {  
        return $this->withMeta(['viewAll' => $viewAll]);
    }

    public function queryKey(string $queryKey)
    {  
        return $this->withMeta(['queryKey' => $queryKey]);
    }

    public function paginator(LengthAwarePaginator $paginator)
	{
		return $this->withMeta([
			'paginator' => $paginator,
		]);
	}

    function __destruct()
	{
		self::$instanceCount--;
	}

    /**
     * Get the component name for the element.
     *
     * @return string
     */
    public function component()
    {
        return 'table';
    }

    public function style(string $style)
    {
        if (in_array($style, ['default', 'tight'])) {
            $this->style = 'table-' . $style;
        }

        return $this;
    }

    public function showBorders(bool $show)
    {
        return $this->withMeta(['showBorders' => $show]);
    }

    public function jsonSerialize(): array
    {
        if (method_exists($this, 'fillTableData')) {
            $this->fillTableData();
        }

        return array_merge([
            'style' => $this->style,
        ], parent::jsonSerialize());
    }
}