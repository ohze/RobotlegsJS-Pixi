// ------------------------------------------------------------------------------
//  Copyright (c) 2017 RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { ContainerBinding } from "./ContainerBinding";

/**
 * @private
 */
export class StageCrawler {
    /*============================================================================*/
    /* Private Properties                                                         */
    /*============================================================================*/

    private _binding: ContainerBinding;

    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/

    /**
     * @private
     */
    constructor(containerBinding: ContainerBinding) {
        this._binding = containerBinding;
    }

    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/

    /**
     * @private
     */
    public scan(view: any): void {
        this.scanContainer(view);
    }

    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/

    private scanContainer(container: any): void {
        this.processView(container);
        let numChildren: number = container.children.length;
        for (let i: number = 0; i < numChildren; i++) {
            // TODO: abstract view layer (pixi.js/three.js)
            let child: any = container.getChildAt(i);
            child["addChild"] // is a container?
                ? this.scanContainer(<any>child)
                : this.processView(child);
        }
    }

    private processView(view: any): void {
        this._binding.handleView(view, view["constructor"]);
    }
}
