export default class {

  w = 50;
  h = 50;
  options = [];
  drawFuncs = [];
  pageIndex = 0;

  constructor() {
    const Mouse = Java.type("org.lwjgl.input.Mouse");

    let selectedOption;
    let shouldBeAbleToClick = true;

    this.gui = new Gui();

    this.gui.registerOpened(() => {
      selectedOption = null;
      shouldBeAbleToClick = true;
      this.pageIndex = 0;
    })

    this.gui.registerScrolled((mx, my, scroll) => {
      this.pageIndex = Math.max(0, Math.min(Math.floor(this.options.length/8), this.pageIndex - scroll));
      selectedOption = null;
      shouldBeAbleToClick = true;
    })

    this.gui.registerDraw((mx, my) => {
      for (let func of this.drawFuncs) {
        func();
      }
      const lmbDown = Mouse.isButtonDown(0);
      const x = Renderer.screen.getWidth()/2-(this.w*1.75);
      const y = Renderer.screen.getHeight()/2-(this.h*1.75);
      const pageString = `&6Page ${this.pageIndex+1}/${Math.floor(this.options.length/8)+1}`;
      Renderer.drawRect(Renderer.color(0, 0, 0, 200), Renderer.screen.getWidth()/2-Renderer.getStringWidth(pageString)/2-4, Renderer.screen.getHeight()/2-3, Renderer.getStringWidth(pageString)+8, 14);
      Renderer.drawString(pageString, Renderer.screen.getWidth()/2-Renderer.getStringWidth(pageString)/2, Renderer.screen.getHeight()/2, true);
      let i = 0;
      for (let option of this.options.slice(this.pageIndex*8, this.pageIndex*8+8)) {
        if (i == 4) i++;
        let rI = Math.floor(i/3);
        let cI = i % 3;
        let rX = x+cI*this.w*1.25;
        let rY = y+rI*this.h*1.25;

        option.iconItem.draw(rX, rY, 3);
        let isMouseOver = mx > rX && mx < rX+this.w && my > rY && my < rY+this.h;
        if (isMouseOver || (selectedOption && selectedOption.title == option.title)) {
          Renderer.drawRect(Renderer.color(255, 90, 0, 150), rX-1, rY-1, this.w+2, this.h+2);
          Renderer.drawRect(Renderer.color(0, 0, 0, 150), rX, rY, this.w, this.h);
        }
        if (isMouseOver) {
          Renderer.translate(0, 0, 500);
          Renderer.drawRect(Renderer.color(0, 0, 0, 200), mx+8, my-16, Renderer.getStringWidth(option.title)+8, 14);
          Renderer.translate(0, 0, 500);
          Renderer.drawString("&6" + option.title, mx+8+4, my-16+3, true);
          if (lmbDown && shouldBeAbleToClick) {
            if (option.subOptions?.length > 0 && (!selectedOption || selectedOption.title != option.title)) {
              selectedOption = option;
            }
            else {
              option.func();
              this.gui.close();
            }
            World.playSound('gui.button.press', 1, 1);
            shouldBeAbleToClick = false;
          }
        }
        else {
          Renderer.drawRect(Renderer.color(0, 0, 0, 150), rX, rY, this.w, this.h);
        }
        i++;
      }
      if (!selectedOption) return;
      let sI = 0;
      for (let subOption of (selectedOption.subOptions?? [])) {
        if ((sI > 5 && sI < 9) || (sI > 10 && sI <  14) || (sI > 15 && sI < 19)) sI += 3;
        let rI = Math.floor(sI/5);
        let cI = sI % 5;
        let rX = x+cI*this.w*1.25 - this.w*1.25;
        let rY = y+rI*this.h*1.25 - this.h*1.25;
        subOption.iconItem.draw(rX, rY, 3);
        if (mx > rX && mx < rX+this.w && my > rY && my < rY+this.h) {
          Renderer.drawRect(Renderer.color(255, 90, 0, 150), rX-1, rY-1, this.w+2, this.h+2);
          Renderer.drawRect(Renderer.color(0, 0, 0, 150), rX, rY, this.w, this.h);

          Renderer.translate(0, 0, 500);
          Renderer.drawRect(Renderer.color(0, 0, 0, 200), mx+8, my-16, Renderer.getStringWidth(subOption.title)+8, 14);
          Renderer.translate(0, 0, 500);
          Renderer.drawString("&6" + subOption.title, mx+8+4, my-16+3, true);

          if (lmbDown) {
            World.playSound('gui.button.press', 1, 1);
            subOption.func();
            this.gui.close();
          }
        }
        else {
          Renderer.drawRect(Renderer.color(0, 0, 0, 150), rX, rY, this.w, this.h);
        }
        sI++;
      }

      if (!lmbDown) shouldBeAbleToClick = true;
    })
  }

  open = () => {
    this.gui.open();
  }

  close = () => {
    this.gui.close();
  }

  isOpen = () => {
    return this.gui.isOpen();
  }

  registerDraw = (func) => {
    this.drawFuncs.push(func);
  }

}