import { Student } from './student.model';

import { Course } from './course.model';

export class Book {

	titulo: string;
      autor: string;
      descricao: string;
      urlFoto: string;
      periodo: string;
      disciplina: string;
      preco: number;
      dataCriacaoAnuncio: Date;
      student: Student;
      curso: Course;
      
}