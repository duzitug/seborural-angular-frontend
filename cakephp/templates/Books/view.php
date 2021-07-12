<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Book $book
 */
?>
<div class="row">
    <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Html->link(__('Edit Book'), ['action' => 'edit', $book->id], ['class' => 'side-nav-item']) ?>
            <?= $this->Form->postLink(__('Delete Book'), ['action' => 'delete', $book->id], ['confirm' => __('Are you sure you want to delete # {0}?', $book->id), 'class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('List Books'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('New Book'), ['action' => 'add'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside>
    <div class="column-responsive column-80">
        <div class="books view content">
            <h3><?= h($book->id) ?></h3>
            <table>
                <tr>
                    <th><?= __('Titulo') ?></th>
                    <td><?= h($book->titulo) ?></td>
                </tr>
                <tr>
                    <th><?= __('Autor') ?></th>
                    <td><?= h($book->autor) ?></td>
                </tr>
                <tr>
                    <th><?= __('Descricao') ?></th>
                    <td><?= h($book->descricao) ?></td>
                </tr>
                <tr>
                    <th><?= __('Periodo') ?></th>
                    <td><?= h($book->periodo) ?></td>
                </tr>
                <tr>
                    <th><?= __('Preco') ?></th>
                    <td><?= h($book->preco) ?></td>
                </tr>
                <tr>
                    <th><?= __('Url Foto') ?></th>
                    <td><?= h($book->url_foto) ?></td>
                </tr>
                <tr>
                    <th><?= __('Disciplina') ?></th>
                    <td><?= h($book->disciplina) ?></td>
                </tr>
                <tr>
                    <th><?= __('Course') ?></th>
                    <td><?= $book->has('course') ? $this->Html->link($book->course->id, ['controller' => 'Courses', 'action' => 'view', $book->course->id]) : '' ?></td>
                </tr>
                <tr>
                    <th><?= __('Genre') ?></th>
                    <td><?= $book->has('genre') ? $this->Html->link($book->genre->id, ['controller' => 'Genres', 'action' => 'view', $book->genre->id]) : '' ?></td>
                </tr>
                <tr>
                    <th><?= __('Student') ?></th>
                    <td><?= $book->has('student') ? $this->Html->link($book->student->id, ['controller' => 'Students', 'action' => 'view', $book->student->id]) : '' ?></td>
                </tr>
                <tr>
                    <th><?= __('Id') ?></th>
                    <td><?= $this->Number->format($book->id) ?></td>
                </tr>
                <tr>
                    <th><?= __('Id Antigo') ?></th>
                    <td><?= $this->Number->format($book->id_antigo) ?></td>
                </tr>
                <tr>
                    <th><?= __('Data Criacao Anuncio') ?></th>
                    <td><?= h($book->data_criacao_anuncio) ?></td>
                </tr>
            </table>
            <div class="related">
                <h4><?= __('Related Anuncios Favoritos') ?></h4>
                <?php if (!empty($book->anuncios_favoritos)) : ?>
                <div class="table-responsive">
                    <table>
                        <tr>
                            <th><?= __('Id') ?></th>
                            <th><?= __('Version') ?></th>
                            <th><?= __('Book Id') ?></th>
                            <th><?= __('Student Id') ?></th>
                            <th class="actions"><?= __('Actions') ?></th>
                        </tr>
                        <?php foreach ($book->anuncios_favoritos as $anunciosFavoritos) : ?>
                        <tr>
                            <td><?= h($anunciosFavoritos->id) ?></td>
                            <td><?= h($anunciosFavoritos->version) ?></td>
                            <td><?= h($anunciosFavoritos->book_id) ?></td>
                            <td><?= h($anunciosFavoritos->student_id) ?></td>
                            <td class="actions">
                                <?= $this->Html->link(__('View'), ['controller' => 'AnunciosFavoritos', 'action' => 'view', $anunciosFavoritos->id]) ?>
                                <?= $this->Html->link(__('Edit'), ['controller' => 'AnunciosFavoritos', 'action' => 'edit', $anunciosFavoritos->id]) ?>
                                <?= $this->Form->postLink(__('Delete'), ['controller' => 'AnunciosFavoritos', 'action' => 'delete', $anunciosFavoritos->id], ['confirm' => __('Are you sure you want to delete # {0}?', $anunciosFavoritos->id)]) ?>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    </table>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>
