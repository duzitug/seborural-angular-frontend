<?php
declare(strict_types=1);

namespace App\Controller;

/**
 * Books Controller
 *
 * @property \App\Model\Table\BooksTable $Books
 * @method \App\Model\Entity\Book[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class BooksController extends AppController
{
    use AbstractApi;

    public function initialize(): void
    {
        parent::initialize();

        $this->elementName = 'livro';

        $this->elementTable = $this->Books;

    }

    public function getBooksByCourseId(string $id): void {
        $this->set( 'livro', $this->Books->find('all')->where(['course_id' => $id])->all() );
        $this->viewBuilder()->setOption('serialize', 'livro');
    }

    public function getBooksByGenreId(string $id): void {
        $this->set( 'livro', $this->Books->find('all')->where(['genre_id' => $id])->all());
        $this->viewBuilder()->setOption('serialize', 'livro');
    }



}
