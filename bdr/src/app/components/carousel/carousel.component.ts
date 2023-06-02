import { Component, Input, OnInit } from '@angular/core';
import { CarouselImages } from 'src/app/models/carouselmages';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  // Définir les propriétés d'entrée du composant, qui peuvent être utilisées pour personnaliser le comportement du carrousel
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;


// Définir les images du carrousel
  @Input() images: CarouselImages[] = [
    {
      imageSrc: '/assets/images/imagesBdr/slider/oreiller.jpg',
      imageAlt: 'photo chambre'
    },
    {
      imageSrc: '/assets/images/imagesBdr/slider/activity.jpeg',
      imageAlt: 'photo activité'
    },
    {
      imageSrc: '/assets/images/imagesBdr/slider/jardinRedim.png',
      imageAlt: 'photo du jardin'
    },

    {
      imageSrc: '/assets/images/imagesBdr/slider/sejour.jpg',
      imageAlt: 'photo du séjour'
    },
    {
      imageSrc: '/assets/images/imagesBdr/slider/gateau.jpeg',
      imageAlt: 'photo du séjour'
    },
  ];

  // Définir la diapositive sélectionnée par défaut
  selectedIndex = 0;

  ngOnInit(): void {
    // Si le défilement automatique est activé, appeler la fonction autoSlideImages
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  // Défiler automatiquement les diapositives à l'aide de setInterval
  autoSlideImages(): void {
    setInterval(()=>{
      this.onNextClick();
    }, this.slideInterval);
  }

  // Sélectionner une diapositive en cliquant sur un indicateur
  selectImages(index: number): void {
    this.selectedIndex = index;

  }
  // Passer à la diapositive précédente (bouton "précédent")
  onPrevClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex--;
    }
  }

  // Passer à la diapositive suivante (bouton "suivant")
  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

}
