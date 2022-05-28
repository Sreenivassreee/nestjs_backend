import { InjectRepository } from "@nestjs/typeorm";
import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";

@EntityRepository(User)
export class AuthRepository extends Repository<User>{
 async createUser(){
     
 }
}