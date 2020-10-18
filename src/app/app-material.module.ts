import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    imports: [
        MatButtonModule,
        MatGridListModule,
        CommonModule
    ],
    exports: [
        MatButtonModule,
        MatGridListModule,
        CommonModule
    ]
})

export class MaterialModule { }