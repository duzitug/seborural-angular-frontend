<?php
declare(strict_types=1);

namespace App\Controller;

/**
 * Students Controller
 *
 * @property \App\Model\Table\StudentsTable $Students
 * @method \App\Model\Entity\Student[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class StudentsController extends AppController
{
    use AbstractApi;

    public function initialize(): void
    {
        parent::initialize();

        $this->elementName = 'estudante';
        $this->elementTable = $this->Students;

    }

}
