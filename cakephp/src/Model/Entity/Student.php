<?php
declare(strict_types=1);

namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Student Entity
 *
 * @property int $id
 * @property string $username
 * @property string|null $nome
 * @property string|null $email
 * @property int|null $id_antigo
 * @property int|null $course_id
 *
 * @property \App\Model\Entity\Course $course
 * @property \App\Model\Entity\AnunciosFavorito[] $anuncios_favoritos
 * @property \App\Model\Entity\Book[] $book
 * @property \App\Model\Entity\BookLiterary[] $book_literary
 * @property \App\Model\Entity\Book[] $books
 */
class Student extends Entity
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
        'username' => true,
        'nome' => true,
        'email' => true,
        'id_antigo' => true,
        'course_id' => true,
        'course' => true,
        'anuncios_favoritos' => true,
        'book' => true,
        'book_literary' => true,
        'books' => true,
    ];
}
