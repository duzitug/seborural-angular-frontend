<?php
declare(strict_types=1);

namespace App\Controller;

use App\Model\Entity\Course;
use Cake\Http\Response;

/**
 * Courses Controller
 *
 * @property \App\Model\Table\CoursesTable $Courses
 * @method \App\Model\Entity\Course[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class CoursesController extends AppController
{
    use AbstractApi;

    public Course $course;

    public function initialize(): void
    {
        parent::initialize();

        $this->elementName = 'curso';

        $this->elementTable = $this->Courses;

    }
}
