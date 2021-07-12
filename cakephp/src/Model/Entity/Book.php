<?php
declare(strict_types=1);

namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Book Entity
 *
 * @property int $id
 * @property string|null $titulo
 * @property string|null $autor
 * @property string|null $descricao
 * @property string|null $periodo
 * @property \Cake\I18n\FrozenTime|null $data_criacao_anuncio
 * @property string|null $preco
 * @property string|null $url_foto
 * @property string|null $disciplina
 * @property int|null $id_antigo
 * @property int|null $course_id
 * @property int|null $genre_id
 * @property int|null $student_id
 *
 * @property \App\Model\Entity\Course $course
 * @property \App\Model\Entity\Genre $genre
 * @property \App\Model\Entity\Student $student
 * @property \App\Model\Entity\AnunciosFavorito[] $anuncios_favoritos
 */
class Book extends Entity
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
        'titulo' => true,
        'autor' => true,
        'descricao' => true,
        'periodo' => true,
        'data_criacao_anuncio' => true,
        'preco' => true,
        'url_foto' => true,
        'disciplina' => true,
        'id_antigo' => true,
        'course_id' => true,
        'genre_id' => true,
        'student_id' => true,
        'course' => true,
        'genre' => true,
        'student' => true,
        'anuncios_favoritos' => true,
    ];
}
