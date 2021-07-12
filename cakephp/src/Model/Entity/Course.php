<?php
declare(strict_types=1);

namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Course Entity
 *
 * @property int $id
 * @property string $nome
 * @property int|null $id_antigo
 *
 * @property \App\Model\Entity\User[] $user
 * @property \App\Model\Entity\Book[] $books
 * @property \App\Model\Entity\Student[] $students
 */
class Course extends Entity
{
    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        'nome' => true,
        'id_antigo' => true,
        'user' => true,
        'books' => true,
        'students' => true,
    ];
}
