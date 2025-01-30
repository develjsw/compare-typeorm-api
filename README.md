### TypeORM과 Prisma ORM을 비교하기 위한 Repository

1. Layer 비교
    - Prisma와 달리 TypeORM의 경우 Repository Layer가 필요하다.
    <br> TypeORM <br>
      <img width="167" alt="typeorm 폴더비교" src="https://github.com/user-attachments/assets/7127cacd-2db5-441d-80e1-58bc2800b121" />
    <br> Prisma <br>
      <img width="164" alt="prisma 폴더비교" src="https://github.com/user-attachments/assets/b50a77c9-398d-4a91-b828-72bf75df8295" />
2. 데이터 모델
    - TypeORM은 Entity, Prisma는 Model을 정의하여 사용
    <br> TypeORM <br>
      <img width="119" alt="prisma schema" src="https://github.com/user-attachments/assets/4f26fdd9-fd95-4070-8985-3b32d0f8161a" /><br>
      <img width="410" alt="prisma schema 내부" src="https://github.com/user-attachments/assets/f1dee283-9613-43a0-bed5-4f480667d8dc" /><br>
    <br> Prisma <br>
    <img width="146" alt="typeorm 엔티티" src="https://github.com/user-attachments/assets/b8776f6d-ccc3-4386-a44a-711070df6647" /><br>
    <img width="339" alt="typeorm 엔티티 내부" src="https://github.com/user-attachments/assets/c57a41ea-10ff-4ff8-8a45-5dee9a470d73" /><br>