<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Book[]|\Cake\Collection\CollectionInterface $books
 */
?>
<div class="books index content">
    <?= $this->Html->link(__('New Book'), ['action' => 'add'], ['class' => 'button float-right']) ?>
    <h3><?= __('Books') ?></h3>
    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th><?= $this->Paginator->sort('id') ?></th>
                    <th><?= $this->Paginator->sort('titulo') ?></th>
                    <th><?= $this->Paginator->sort('autor') ?></th>
                    <th><?= $this->Paginator->sort('descricao') ?></th>
                    <th><?= $this->Paginator->sort('periodo') ?></th>
                    <th><?= $this->Paginator->sort('data_criacao_anuncio') ?></th>
                    <th><?= $this->Paginator->sort('preco') ?></th>
                    <th><?= $this->Paginator->sort('url_foto') ?></th>
                    <th><?= $this->Paginator->sort('disciplina') ?></th>
                    <th><?= $this->Paginator->sort('id_antigo') ?></th>
                    <th><?= $this->Paginator->sort('course_id') ?></th>
                    <th><?= $this->Paginator->sort('genre_id') ?></th>
                    <th><?= $this->Paginator->sort('student_id') ?></th>
                    <th class="actions"><?= __('Actions') ?></th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($books as $book): ?>
                <tr>
                    <td><?= $this->Number->format($book->id) ?></td>
                    <td><?= h($book->titulo) ?></td>
                    <td><?= h($book->autor) ?></td>
                    <td><?= h($book->descricao) ?></td>
                    <td><?= h($book->periodo) ?></td>
                    <td><?= h($book->data_criacao_anuncio) ?></td>
                    <td><?= h($book->preco) ?></td>
                    <td><?= h($book->url_foto) ?></td>
                    <td><?= h($book->disciplina) ?></td>
                    <td><?= $this->Number->format($book->id_antigo) ?></td>
                    <td><?= $book->has('course') ? $this->Html->link($book->course->id, ['controller' => 'Courses', 'action' => 'view', $book->course->id]) : '' ?></td>
                    <td><?= $book->has('genre') ? $this->Html->link($book->genre->id, ['controller' => 'Genres', 'action' => 'view', $book->genre->id]) : '' ?></td>
                    <td><?= $book->has('student') ? $this->Html->link($book->student->id, ['controller' => 'Students', 'action' => 'view', $book->student->id]) : '' ?></td>
                    <td class="actions">
                        <?= $this->Html->link(__('View'), ['action' => 'view', $book->id]) ?>
                        <?= $this->Html->link(__('Edit'), ['action' => 'edit', $book->id]) ?>
                        <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $book->id], ['confirm' => __('Are you sure you want to delete # {0}?', $book->id)]) ?>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <div class="paginator">
        <ul class="pagination">
            <?= $this->Paginator->first('<< ' . __('first')) ?>
            <?= $this->Paginator->prev('< ' . __('previous')) ?>
            <?= $this->Paginator->numbers() ?>
            <?= $this->Paginator->next(__('next') . ' >') ?>
            <?= $this->Paginator->last(__('last') . ' >>') ?>
        </ul>
        <p><?= $this->Paginator->counter(__('Page {{page}} of {{pages}}, showing {{current}} record(s) out of {{count}} total')) ?></p>
    </div>
</div>
