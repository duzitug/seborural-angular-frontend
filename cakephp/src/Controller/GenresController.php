<?php
declare(strict_types=1);

namespace App\Controller;

/**
 * Genres Controller
 *
 * @property \App\Model\Table\GenresTable $Genres
 * @method \App\Model\Entity\Genre[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class GenresController extends AppController
{
   use AbstractApi;

    public function initialize(): void
    {
        parent::initialize();

        $this->elementName = 'genero';

        $this->elementTable = $this->Genres;

    }
}
