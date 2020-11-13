import { MigrationInterface, QueryRunner } from "typeorm";

export class initDatabase1605277034146 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            create table users (
                id int not null generated always as identity primary key,
                first_name varchar(255) not null,
                last_name varchar(255) not null,
                email varchar(255) not null
            );
            create table programs (
                id int not null generated always as identity primary key,
                title varchar(100) not null,
                short_description varchar(120) not null,
                description varchar not null,
                owner_id int not null,
                constraint fk_owner_id foreign key (owner_id) references users(id)
            );

            create table user_roles (
                id int not null generated always as identity primary key,
                name varchar not null
            );
            
            create table users_programs (
                id int not null generated always as identity primary key,
                user_id int not null,
                program_id int not null,
                role_id int not null,
                constraint fk_user_id foreign key (user_id) references users(id),
                constraint fk_program_id foreign key (program_id) references programs(id),
                constraint fk_role_id foreign key (role_id) references user_roles(id)
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
