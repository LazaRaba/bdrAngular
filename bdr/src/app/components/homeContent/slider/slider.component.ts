import { Component, Input, OnInit } from '@angular/core';
import { SliderImage } from 'src/app/models/sliderImage';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  selectedIndex = 0;

  @Input() images: SliderImage[] = [
    {
      imageSrc: '/assets/images/imagesBdr/slider/oreiller.jpg',
      imageAlt:'photo du jardin'
    },
    {
      imageSrc: '/assets/images/imagesBdr/slider/kidona.jpg',
      imageAlt:'photo du jardin'
    },
    {
      imageSrc: '/assets/images/imagesBdr/slider/jardinRedim.png',
      imageAlt:'photo du jardin'
    },
    
    {
      imageSrc: '/assets/images/imagesBdr/slider/sejour.jpg',
      imageAlt:'photo du jardin'
    },
  ];

  ngOnInit(): void { }

  
}
