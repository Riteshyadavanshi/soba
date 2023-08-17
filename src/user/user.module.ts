
import {Module} from '@nestjs/common'
import { userService } from './user.service';
import { userController } from './user.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { User } from 'src/entity/user.entity';
@Module({
    imports:[
        TypeOrmModule.forFeature([User])
    ],
    controllers:[userController],
    providers:[userService],
    exports:[userService]
})

export class userModule{

}