import { ChangeDetectorRef, Component } from '@angular/core';
import { AnimalService } from '../../services/animal-service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';


@Component({
  selector: 'app-animal-component',
  imports: [CommonModule],
  templateUrl: './animal-component.html',
  styleUrl: './animal-component.css',
})
export class AnimalComponent {
  animalList: any = [];
  animalForm: FormGroup | any;

  constructor(private animalService: AnimalService, private cd: ChangeDetectorRef, private toastr: ToastrService, private fromBuilder: FormBuilder,
    private router: Router) { }

  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList = data;
      this.cd.detectChanges();
    });
  }
  ngOnInit() {
    this.animalForm = this.fromBuilder.group({
      nombre: '',
      edad: 0,
      tipo: ''
    });
    this.getAllAnimals();
  }
  ngOnChanges() {
    this.getAllAnimals();
  }
  newAnimalEntry() {
    this.animalService.newAnimal(this.animalForm.value).subscribe(
      () => {
        //Redirigiendo a la ruta actual /inicio y recargando la ventana
        this.router.navigate(['/inicio'])
          .then(() => {
            this.newMessage('Registro exitoso');
          })
      }
    );
  }


  newMessage(messageText: string) {
    this.toastr.success('Clic aquí para actualizar la lista', messageText)
      .onTap
      .pipe(take(1))
      .subscribe(() => window.location.reload());
  }

}



