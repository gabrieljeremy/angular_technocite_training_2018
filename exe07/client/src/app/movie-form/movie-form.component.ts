import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../shared/movie.service';
import { Movie } from '../shared/models/movie.model';
import { Resolve, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  movieForm: FormGroup;
  title: String;
  @Input() movie: Movie;
  constructor(fb: FormBuilder, public movieService: MovieService, private route: ActivatedRoute) {
    this.movieForm = fb.group({
      title: ['', Validators.required],
      originalTitle: [''],
      language: [''],
      ID: [''],
      poster: [''],
      backdrop: [''],
      overview: [''],
      releaseDate: ['']
    });
  }

  ngOnInit() {}
  onSubmit(movie) {
    if (this.movieForm.controls.valid) {
      this.movieService.postMovie(movie as Movie);
    } else {
      console.log('form not valid');
    }
  }
}
