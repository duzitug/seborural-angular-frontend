<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Student $student
 */
?>
<div class="row">
    <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Html->link(__('Edit Student'), ['action' => 'edit', $student->id], ['class' => 'side-nav-item']) ?>
            <?= $this->Form->postLink(__('Delete Student'), ['action' => 'delete', $student->id], ['confirm' => __('Are you sure you want to delete # {0}?', $student->id), 'class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('List Students'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('New Student'), ['action' => 'add'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside>
    <div class="column-responsive column-80">
        <div class="students view content">
            <h3><?= h($student->id) ?></h3>
            <table>
                <tr>
                    <th><?= __('Username') ?></th>
                    <td><?= h($student->username) ?></td>
                </tr>
                <tr>
                    <th><?= __('Nome') ?></th>
                    <td><?= h($student->nome) ?></td>
                </tr>
                <tr>
                    <th><?= __('Email') ?></th>
                    <td><?= h($student->email) ?></td>
                </tr>
                <tr>
                    <th><?= __('Course') ?></th>
                    <td><?= $student->has('course') ? $this->Html->link($student->course->id, ['controller' => 'Courses', 'action' => 'view', $student->course->id]) : '' ?></td>
                </tr>
                <tr>
                    <th><?= __('Id') ?></th>
                    <td><?= $this->Number->format($student->id) ?></td>
                </tr>
                <tr>
                    <th><?= __('Id Antigo') ?></th>
                    <td><?= $this->Number->format($student->id_antigo) ?></td>
                </tr>
            </table>
            <div class="related">
                <h4><?= __('Related Anuncios Favoritos') ?></h4>
                <?php if (!empty($student->anuncios_favoritos)) : ?>
                <div class="table-responsive">
                    <table>
                        <tr>
                            <th><?= __('Id') ?></th>
                            <th><?= __('Version') ?></th>
                            <th><?= __('Book Id') ?></th>
                            <th><?= __('Student Id') ?></th>
                            <th class="actions"><?= __('Actions') ?></th>
                        </tr>
                        <?php foreach ($student->anuncios_favoritos as $anunciosFavoritos) : ?>
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
            <div class="related">
                <h4><?= __('Related Book') ?></h4>
                <?php if (!empty($student->book)) : ?>
                <div class="table-responsive">
                    <table>
                        <tr>
                            <th><?= __('Id') ?></th>
                            <th><?= __('Version') ?></th>
                            <th><?= __('Periodo') ?></th>
                            <th><?= __('Data Criacao Anuncio') ?></th>
                            <th><?= __('Titulo') ?></th>
                            <th><?= __('Autor') ?></th>
                            <th><?= __('Descricao') ?></th>
                            <th><?= __('Preco') ?></th>
                            <th><?= __('Url Foto') ?></th>
                            <th><?= __('Disciplina') ?></th>
                            <th><?= __('Curso Id') ?></th>
                            <th><?= __('Student Id') ?></th>
                            <th class="actions"><?= __('Actions') ?></th>
                        </tr>
                        <?php foreach ($student->book as $book) : ?>
                        <tr>
                            <td><?= h($book->id) ?></td>
                            <td><?= h($book->version) ?></td>
                            <td><?= h($book->periodo) ?></td>
                            <td><?= h($book->data_criacao_anuncio) ?></td>
                            <td><?= h($book->titulo) ?></td>
                            <td><?= h($book->autor) ?></td>
                            <td><?= h($book->descricao) ?></td>
                            <td><?= h($book->preco) ?></td>
                            <td><?= h($book->url_foto) ?></td>
                            <td><?= h($book->disciplina) ?></td>
                            <td><?= h($book->curso_id) ?></td>
                            <td><?= h($book->student_id) ?></td>
                            <td class="actions">
                                <?= $this->Html->link(__('View'), ['controller' => 'Book', 'action' => 'view', $book->id]) ?>
                                <?= $this->Html->link(__('Edit'), ['controller' => 'Book', 'action' => 'edit', $book->id]) ?>
                                <?= $this->Form->postLink(__('Delete'), ['controller' => 'Book', 'action' => 'delete', $book->id], ['confirm' => __('Are you sure you want to delete # {0}?', $book->id)]) ?>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    </table>
                </div>
                <?php endif; ?>
            </div>
            <div class="related">
                <h4><?= __('Related Book Literary') ?></h4>
                <?php if (!empty($student->book_literary)) : ?>
                <div class="table-responsive">
                    <table>
                        <tr>
                            <th><?= __('Id') ?></th>
                            <th><?= __('Version') ?></th>
                            <th><?= __('Genre Id') ?></th>
                            <th><?= __('Periodo') ?></th>
                            <th><?= __('Data Criacao Anuncio') ?></th>
                            <th><?= __('Titulo') ?></th>
                            <th><?= __('Autor') ?></th>
                            <th><?= __('Descricao') ?></th>
                            <th><?= __('Preco') ?></th>
                            <th><?= __('Url Foto') ?></th>
                            <th><?= __('Disciplina') ?></th>
                            <th><?= __('Student Id') ?></th>
                            <th class="actions"><?= __('Actions') ?></th>
                        </tr>
                        <?php foreach ($student->book_literary as $bookLiterary) : ?>
                        <tr>
                            <td><?= h($bookLiterary->id) ?></td>
                            <td><?= h($bookLiterary->version) ?></td>
                            <td><?= h($bookLiterary->genre_id) ?></td>
                            <td><?= h($bookLiterary->periodo) ?></td>
                            <td><?= h($bookLiterary->data_criacao_anuncio) ?></td>
                            <td><?= h($bookLiterary->titulo) ?></td>
                            <td><?= h($bookLiterary->autor) ?></td>
                            <td><?= h($bookLiterary->descricao) ?></td>
                            <td><?= h($bookLiterary->preco) ?></td>
                            <td><?= h($bookLiterary->url_foto) ?></td>
                            <td><?= h($bookLiterary->disciplina) ?></td>
                            <td><?= h($bookLiterary->student_id) ?></td>
                            <td class="actions">
                                <?= $this->Html->link(__('View'), ['controller' => 'BookLiterary', 'action' => 'view', $bookLiterary->id]) ?>
                                <?= $this->Html->link(__('Edit'), ['controller' => 'BookLiterary', 'action' => 'edit', $bookLiterary->id]) ?>
                                <?= $this->Form->postLink(__('Delete'), ['controller' => 'BookLiterary', 'action' => 'delete', $bookLiterary->id], ['confirm' => __('Are you sure you want to delete # {0}?', $bookLiterary->id)]) ?>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    </table>
                </div>
                <?php endif; ?>
            </div>
            <div class="related">
                <h4><?= __('Related Books') ?></h4>
                <?php if (!empty($student->books)) : ?>
                <div class="table-responsive">
                    <table>
                        <tr>
                            <th><?= __('Id') ?></th>
                            <th><?= __('Titulo') ?></th>
                            <th><?= __('Autor') ?></th>
                            <th><?= __('Descricao') ?></th>
                            <th><?= __('Periodo') ?></th>
                            <th><?= __('Data Criacao Anuncio') ?></th>
                            <th><?= __('Preco') ?></th>
                            <th><?= __('Url Foto') ?></th>
                            <th><?= __('Disciplina') ?></th>
                            <th><?= __('Id Antigo') ?></th>
                            <th><?= __('Course Id') ?></th>
                            <th><?= __('Genre Id') ?></th>
                            <th><?= __('Student Id') ?></th>
                            <th class="actions"><?= __('Actions') ?></th>
                        </tr>
                        <?php foreach ($student->books as $books) : ?>
                        <tr>
                            <td><?= h($books->id) ?></td>
                            <td><?= h($books->titulo) ?></td>
                            <td><?= h($books->autor) ?></td>
                            <td><?= h($books->descricao) ?></td>
                            <td><?= h($books->periodo) ?></td>
                            <td><?= h($books->data_criacao_anuncio) ?></td>
                            <td><?= h($books->preco) ?></td>
                            <td><?= h($books->url_foto) ?></td>
                            <td><?= h($books->disciplina) ?></td>
                            <td><?= h($books->id_antigo) ?></td>
                            <td><?= h($books->course_id) ?></td>
                            <td><?= h($books->genre_id) ?></td>
                            <td><?= h($books->student_id) ?></td>
                            <td class="actions">
                                <?= $this->Html->link(__('View'), ['controller' => 'Books', 'action' => 'view', $books->id]) ?>
                                <?= $this->Html->link(__('Edit'), ['controller' => 'Books', 'action' => 'edit', $books->id]) ?>
                                <?= $this->Form->postLink(__('Delete'), ['controller' => 'Books', 'action' => 'delete', $books->id], ['confirm' => __('Are you sure you want to delete # {0}?', $books->id)]) ?>
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
