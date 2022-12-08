import { _decorator, Component, Node, Vec3, Vec2, Collider2D, RigidBody2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Block')
export class Square extends Component {
    forceX : number;
    forceY : number; 
    public rigidbody;
    public collider;
    start() {
        this.forceY = -12;
        this.collider = this.getComponent(Collider2D);
        this.rigidbody = this.getComponent(RigidBody2D);
        this.rigidbody.linearVelocity = new Vec2 (0,this.forceY);

    }

    update(deltaTime: number) {
        
    }
}


