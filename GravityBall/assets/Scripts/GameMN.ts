import { _decorator, Component, Node, Prefab, UITransform, instantiate, randomRange, Vec2, random, Vec3, RichText } from 'cc';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('GameMN')
export class GameMN extends Component {
    @property({type:Prefab})
    public retanglePrefab : Prefab|null = null;
    @property({type:Prefab})
    public squarePrefab : Prefab|null = null;
    @property({type:Player})
    private player;
    @property({type:RichText})
    public scoreText;
    static score:number ;
    public listRetangle : UITransform[] = [];
    public listSquare : UITransform[] = [];
    timeCount : number = 0;
    start() {
        
    }

    update(deltaTime: number) {
        this.timeCount++;
        console.log(this.timeCount);
        if (this.timeCount == 100)
        {
            this.timeCount = 0;
            this.Spawn();
            console.log("Spawn");
        }
        this.scoreText.Text = GameMN.score.toString();
    }

    
    
    countSpawn : number = 0;
    Spawn(){
        
        this.countSpawn ++;
        console.log(this.countSpawn);
        let posY = (20+ this.countSpawn) *50;
        var spawnRetangle = Math.random() < 0.7;
        var isRetangleLeft = Math.random() < 0.5;
        let posRetangle = new Vec2(); 
        let posSquare = new Vec2(); 
        if (spawnRetangle)
        {
            if(isRetangleLeft)
            {
                posRetangle = new Vec2(-400 + randomRange(-100.0, 200.0), posY);

            }
            else
            {
                posRetangle = new Vec2(400+ randomRange(200.0, -100.0), posY);
                
            }
            console.log(posRetangle);
            let obj = instantiate(this.retanglePrefab) ;
            obj.parent = this.node.parent;
            obj.position = new Vec3(posRetangle.x,posRetangle.y,this.node.position.z);
        }
        else
        {
            posSquare = new Vec2 (200 + randomRange(-80.0, 80.0), posY);
            console.log(posSquare);
            let obj = instantiate(this.squarePrefab) ;
            obj.parent = this.node.parent;
            obj.position = new Vec3(posSquare.x,posSquare.y,this.node.position.z);
        }
        
        
    }
    
}


