// ------------------------------------------------------------------------------
//  Copyright (c) 2017 RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { ITypeFilter, IGuard, IHook } from "@robotlegsjs/core";

/**
 * Represents a Mediator mapping
 */
export interface IMediatorMapping {
    /**
     * The matcher for this mapping
     */
    matcher: ITypeFilter;

    /**
     * The concrete mediator class
     */
    mediatorClass: FunctionConstructor;

    /**
     * A list of guards to check before allowing mediator creation
     */
    guards: IGuard[];

    /**
     * A list of hooks to run before creating a mediator
     */
    hooks: IHook[];

    /**
     * Should the mediator be removed when the mediated item looses scope?
     */
    autoRemoveEnabled: boolean;
}
