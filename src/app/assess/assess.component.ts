import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assess',
  templateUrl: './assess.component.html',
  styleUrls: ['./assess.component.css']
})
export class AssessComponent implements OnInit {
  typewriter_text: string = 
  "Personality is defined as the characteristic sets of behaviors, cognitions, and emotional patterns that evolve from biological and environmental factors. " + 
  "While there is no generally agreed upon definition of personality, most theories focus on motivation and psychological interactions with one's environment. " +
  "Trait-based personality theories, such as those defined by Raymond Cattell, define personality as the traits that predict a person's behavior. On the other hand, more behaviorally-based approaches define personality through learning and habits. Nevertheless, most theories view personality as relatively stable. " +
  "Personality can be determined through a variety of tests. Due to the fact that personality is a complex idea, the dimensions of personality and scales of personality tests vary and often are poorly defined. Two main tools to measure personality are objective tests and projective measures. " +
  "It has been shown that personality traits are more malleable by environmental influences than researchers originally believed." +
  "Personality differences predict the occurrence of life experiences.";
  typewriter_display: string = "";

  constructor() { }

  typingCallback(that) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 100, that);
    }
  }

  ngOnInit(): void {
    this.typingCallback(this);
  }

}
