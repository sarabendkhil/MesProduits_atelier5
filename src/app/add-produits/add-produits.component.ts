import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-produits',
  templateUrl: './add-produits.component.html',
})
export class AddProduitsComponent implements OnInit {
  newProduit= new Produit();
  message:string;

  constructor(private produitService: ProduitService,private router:Router) { }

  ngOnInit():void{}
  addProduit(){
    this.produitService.ajouterProduit(this.newProduit).subscribe(prod => {
    console.log(prod);

    });
    this.router.navigate(['produits']).then(() => {
      window.location.reload();
      });
    }
}
