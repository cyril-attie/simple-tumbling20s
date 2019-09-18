import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tumbling20s",
  templateUrl: "./tumbling20s.component.html",
  styleUrls: ["./tumbling20s.component.css"]
})
export class Tumbling20sComponent implements OnInit {
  constructor() {}

  ngOnInit() {

    document.body.onmousemove = () => {
      document.getElementById("initial-note-with-mouse").removeAttribute('hidden')

    }
  //tooltip gets positioned relatively to the body element, problem when scrolled down
  // const tooltip = new (function() {
  //   const node = document.createElement("div");
  //   node.className = "tooltip";
  //   // node.setAttribute("hidden", "");
  //   document.getElementById('read-place').appendChild(node);

  //   this.follow = event => {
  //     node.style.left = event.screenX + 20 + "px";
  //     node.style.top = event.screenY + 10 + "px";
  //   };

  //   this.show = event => {
  //     node.textContent = event.target.dataset.tooltip;
  //     node.removeAttribute("hidden");
  //   };

  //   this.hide = () => {
  //     node.setAttribute("hidden", "");
  //   };
  // })();

  // const DEFINED_WORDS: NodeListOf<HTMLElement> = document.querySelectorAll("i");

  // DEFINED_WORDS.forEach(word => {
  //   word.onmouseover = tooltip.show;
  //   word.onmousemove = tooltip.follow;
  //   word.onmouseout = tooltip.hide;
  // });
  }

}
