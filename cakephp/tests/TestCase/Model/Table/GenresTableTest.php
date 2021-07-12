<?php
declare(strict_types=1);

namespace App\Test\TestCase\Model\Table;

use App\Model\Table\GenresTable;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\GenresTable Test Case
 */
class GenresTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\GenresTable
     */
    protected $Genres;

    /**
     * Fixtures
     *
     * @var array
     */
    protected $fixtures = [
        'app.Genres',
        'app.BookLiterary',
        'app.Books',
        'app.Livros',
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();
        $config = $this->getTableLocator()->exists('Genres') ? [] : ['className' => GenresTable::class];
        $this->Genres = $this->getTableLocator()->get('Genres', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown(): void
    {
        unset($this->Genres);

        parent::tearDown();
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault(): void
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
