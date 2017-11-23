// ------------------------------------------------------------------------------
//  Copyright (c) 2017 RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { injectable } from "inversify";

@injectable()
export class MediatorWatcher {
    protected _notifications: string[] = [];

    public get notifications(): string[] {
        return this._notifications;
    }

    public notify(message: string): void {
        this._notifications.push(message);
    }
}