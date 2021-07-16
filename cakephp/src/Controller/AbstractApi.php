<?php

declare(strict_types=1);

namespace App\Controller;

use Cake\Datasource\EntityInterface;
use Cake\Datasource\Exception\RecordNotFoundException;
use Cake\Datasource\ResultSetInterface;
use Cake\ORM\Table;

trait AbstractApi
{
    public string $elementName;
    public Table $elementTable;

    public function index(): void
    {
        $this->setElementToTemplate( $this->getAllElements() );
        $this->serializeElement();

    }

    public function indexWithPagination(): void
    {
      $offset = $this->request->getParam('offset');
      $this->setElementToTemplate( $this->getAllElements( $offset ) );
      $this->serializeElement();

    }

    public function view($id): void
    {
        $element = $this->getElementById($id);
        $this->setElementToTemplate($element);
        $this->serializeElement();
    }

    public function add(): void
    {
        $this->request->allowMethod(['post', 'put']);
        $element = $this->elementTable->newEntity( $this->request->getData() );
        $this->saveElement($element);
    }

    public function edit($id): void
    {
        $this->request->allowMethod(['patch', 'post', 'put']);

        $data = $this->request->getData();

        $element = $this->elementTable->patchEntity( $this->elementTable->get($id), $this->request->getData() );
        $this->saveElement($element);
    }

    public function delete($id): void
    {
        $this->request->allowMethod(['delete']);
        $this->elementTable->delete($this->elementTable->get($id)) ? $message = 'Deletado com sucesso' : $message = 'Erro na deleçãp';
        $this->set('message', $message);
        $this->viewBuilder()->setOption('serialize', ['message']);
    }


    //******************* Métodos auxiliares ******************//

    /**
     * @param $id
     * @return mixed
     * @throws RecordNotFoundException
     */
    public function getElementById($id): EntityInterface
    {
        switch ( $this->elementName ) {
            case 'livro':
                return $this->elementTable->get($id, ['contain' => ['Courses', 'Genres', 'Students'] ]);
            case 'estudante':
                return $this->elementTable->get($id, ['contain' => 'Courses' ]);
            default:
                return $this->elementTable->get($id);
        }

        // return $element;
    }

    public function getAllElements($offset = 0): ResultSetInterface {
        // como fazer a paginação dos dados em JSON??
        switch ( $this->elementName ) {
            case 'estudante':
                return $this->elementTable->find('all', ['contain' => 'Courses'])->offset($offset)->limit(10)->all();
            case 'livro':
                return $this->elementTable->find('all', ['contain' => ['Courses', 'Genres', 'Students'] ])->limit(10)->all();
            default:
                return $this->elementTable->find('all')->all();
        }
    }

    /**
     * @param $element
     */
    public function saveElement($element): void
    {
        $this->elementTable->save($element)? $mensagem = 'Salvo' :  $mensagem = 'Erro';
        $this->set(['message' => $mensagem, $this->elementName => $element]);
        $this->viewBuilder()->setOption('serialize', [$this->elementName, 'message']);
    }

    public function serializeElement(): void
    {
        $this->viewBuilder()->setOption('serialize', $this->elementName);
    }

    /**
     * @param $element
     */
    public function setElementToTemplate($element): void
    {
        $this->set($this->elementName, $element);
    }
}




