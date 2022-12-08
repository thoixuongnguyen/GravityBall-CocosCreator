import { _decorator, Component, Collider2D, Contact2DType, IPhysics2DContact, director, systemEvent, SystemEventType, EventKeyboard, macro, Vec3, RigidBody2D, Vec2 } from 'cc';
import { GameMN } from './GameMN';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    @property({type:GameMN})
    private gameMN;
    moveRight: boolean;
    moving: boolean;
    forceX : number;
    forceY : number; 
    public rigidbody;
    public collider;
    start() {
        this.moveRight = true;
        this.moving = false;
        this.forceX = 1000;
        this.forceY = 300;
        this.node.position = new Vec3(0, 0, 0);
        this.collider = this.getComponent(Collider2D);
        this.rigidbody = this.getComponent(RigidBody2D);
        this.rigidbody.linearVelocity = new Vec2 (-this.forceX,0);
        this.moveRight = false;
        if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
        systemEvent.on(SystemEventType.KEY_DOWN, this.onKeyDown, this);
    }

    
        
    
    update(deltaTime: number) {
        let direction : number;
        if (this.moving == true)
       {
           if (this.moveRight == true)
           {
               direction = 1;
               let newVelocity = new Vec2(direction*this.forceX,0);
               this.rigidbody.linearVelocity = newVelocity;
               console.log(this.rigidbody.linearVelocity);
           }
           else
           {
                direction = -1;
                let newVelocity = new Vec2(direction*this.forceX,0);
                this.rigidbody.linearVelocity = newVelocity;
                console.log(this.rigidbody.linearVelocity);
           }
       }

    }
    onKeyDown (event: EventKeyboard) {
        switch(event.keyCode) {
            case macro.KEY.space:
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
        // will be called once when two colliders begin to contact\
        console.log(otherCollider.tag)
        if(otherCollider.tag == 1)
        {
            this.gameMN.score ++;
            let newVelocity = new Vec2(0,0);
            this.rigidbody.linearVelocity = newVelocity;
            this.moving = false;
            console.log(this.rigidbody.linearVelocity);

        }
        
    }
    
 

}
