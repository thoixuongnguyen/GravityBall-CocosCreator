import { _decorator, Component, Vec3, debug, CCObject } from 'cc';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('CameraManager')
export class CameraManager extends Component {
    @property({type:Player})
    private player;
    
    start() {
    }

    update(deltaTime: number) {
        let cameraMoveY = new Vec3(this.node.position.x, this.player.node.position.y, this.node.position.z);
        this.node.position = cameraMoveY;
    }
}


