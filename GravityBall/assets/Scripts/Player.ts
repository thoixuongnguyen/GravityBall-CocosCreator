import { _decorator, Component, Node, Collider2D, Contact2DType, IPhysics2DContact, director, systemEvent, SystemEventType, EventKeyboard, macro, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    moveRight: boolean;
    moving: boolean;
    start() {
        this.moveRight = true;
        this.moving = false;
        this.node.position = new Vec3(0, 0, 0);
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
        systemEvent.on(SystemEventType.KEY_DOWN, this.onKeyDown, this);
    }

    update(deltaTime: number) {
        let playerMoveX = new Vec3(this.node.position.x, this.node.position.y + 100 * deltaTime, this.node.position.z);
        this.node.position = playerMoveX;
        if (this.moving == true)
       {
           if (this.moveRight == true)
           {
               let viTriMoi = new Vec3(this.node.position.x + 4000 * deltaTime, this.node.position.y,this.node.position.z);
               if (viTriMoi.x > 200)
               {
                   this.moving = false;
               }
               this.node.position = viTriMoi;
           }
           else
           {
               let viTriMoi = new Vec3(this.node.position.x - 4000 * deltaTime, this.node.position.y,this.node.position.z);
               if (viTriMoi.x < -200)
               {
                   this.moving = false;
               }
               this.node.position = viTriMoi;
           }
       }

    }
    onKeyDown (event: EventKeyboard) {
        switch(event.keyCode) {
            case macro.KEY.a:
                console.log('Press a key');
                if (this.moving == false)
                {
                    if (this.moveRight == true)
                    {
                        this.moveRight = false;
                        this.moving = true;
                    }
                    else
                    {
                        this.moveRight = true;
                        this.moving = true;
                    }
                }
              
                break;
        }
    }
 
    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called once when two colliders begin to contact
        console.log('onBeginContact');
        director.loadScene("main");
    }
 

}
