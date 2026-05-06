import { ChangeDetectorRef, Component } from '@angular/core';
import { AnimalService } from '../../services/animal-service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-animal-component',
  imports:[CommonModule],
  templateUrl: './animal-component.html',
  styleUrl: './animal-component.css',
})
export class AnimalComponent {
    animalList:any= [];

constructor(private animalService:AnimalService,private cd: ChangeDetectorRef, private toastr: ToastrService) {}
 
 getAllAnimals() {
 this.animalService.getAllAnimalsData().subscribe((data: {}) => {
  this.animalList=data;
  this.cd.detectChanges();
  });
  }
  ngOnInit() {
  this.getAllAnimals();
 }
  ngOnChanges() {
    this.getAllAnimals();
  }

}



