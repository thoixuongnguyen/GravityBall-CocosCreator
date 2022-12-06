import { _decorator, Component, Node, Vec3 } from 'cc';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('CameraManager')
export class CameraManager extends Component {
    public player:Player
    start() {
        this.player = this.getComponent(Player);
    }

    update(deltaTime: number) {
        let cameraMoveY = new Vec3(this.node.position.x, this.player.node.position.y, this.node.position.z);
        this.node.position = cameraMoveY;
    }
}


