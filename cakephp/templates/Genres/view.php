<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Genre $genre
 */
?>
<div class="row">
    <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Html->link(__('Edit Genre'), ['action' => 'edit', $genre->id], ['class' => 'side-nav-item']) ?>
            <?= $this->Form->postLink(__('Delete Genre'), ['action' => 'delete', $genre->id], ['confirm' => __('Are you sure you want to delete # {0}?', $genre->id), 'class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('List Genres'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('New Genre'), ['action' => 'add'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside>
    <div class="column-responsive column-80">
        <div class="genres view content">
            <h3><?= h($genre->id) ?></h3>
            <table>
                <tr>
                    <th><?= __('Nome') ?></th>
                    <td><?= h($genre->nome) ?></td>
                </tr>
                <tr>
                    <th><?= __('Id') ?></th>
                    <td><?= $this->Number->format($genre->id) ?></td>
                </tr>
                <tr>
                    <th><?= __('Id Antigo') ?></th>
                    <td><?= $this->Number->format($genre->id_antigo) ?></td>
                </tr>
            </table>
            <div class="related">
                <h4><?= __('Related Book Literary') ?></h4>
                <?php if (!empty($genre->book_literary)) : ?>
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
                        <?php foreach ($genre->book_literary as $bookLiterary) : ?>
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
                <?php if (!empty($genre->books)) : ?>
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
                        <?php foreach ($genre->books as $books) : ?>
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
            <div class="related">
                <h4><?= __('Related Livros') ?></h4>
                <?php if (!empty($genre->livros)) : ?>
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
                            <th><?= __('Curso Id') ?></th>
                            <th><?= __('Genre Id') ?></th>
                            <th class="actions"><?= __('Actions') ?></th>
                        </tr>
                        <?php foreach ($genre->livros as $livros) : ?>
                        <tr>
                            <td><?= h($livros->id) ?></td>
                            <td><?= h($livros->titulo) ?></td>
                            <td><?= h($livros->autor) ?></td>
                            <td><?= h($livros->descricao) ?></td>
                            <td><?= h($livros->periodo) ?></td>
                            <td><?= h($livros->data_criacao_anuncio) ?></td>
                            <td><?= h($livros->preco) ?></td>
                            <td><?= h($livros->url_foto) ?></td>
                            <td><?= h($livros->disciplina) ?></td>
                            <td><?= h($livros->curso_id) ?></td>
                            <td><?= h($livros->genre_id) ?></td>
                            <td class="actions">
                                <?= $this->Html->link(__('View'), ['controller' => 'Livros', 'action' => 'view', $livros->id]) ?>
                                <?= $this->Html->link(__('Edit'), ['controller' => 'Livros', 'action' => 'edit', $livros->id]) ?>
                                <?= $this->Form->postLink(__('Delete'), ['controller' => 'Livros', 'action' => 'delete', $livros->id], ['confirm' => __('Are you sure you want to delete # {0}?', $livros->id)]) ?>
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
