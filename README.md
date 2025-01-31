### TypeORM과 Prisma ORM을 비교하기 위한 Repository

1. Layer 비교
    - Prisma와 달리 TypeORM의 경우 Repository Layer가 필요
    <br> [ TypeORM ] <br>
      <img width="167" alt="typeorm 폴더비교" src="https://github.com/user-attachments/assets/7127cacd-2db5-441d-80e1-58bc2800b121" />
    <br> [ Prisma ] <br>
      <img width="164" alt="prisma 폴더비교" src="https://github.com/user-attachments/assets/b50a77c9-398d-4a91-b828-72bf75df8295" />
   

2. 데이터 모델 비교
    - TypeORM은 Entity, Prisma는 Model을 정의하여 사용
    <br> [ TypeORM ] <br>
      <img width="119" alt="prisma schema" src="https://github.com/user-attachments/assets/4f26fdd9-fd95-4070-8985-3b32d0f8161a" /><br>
      <img width="410" alt="prisma schema 내부" src="https://github.com/user-attachments/assets/f1dee283-9613-43a0-bed5-4f480667d8dc" /><br>
    <br> [ Prisma ] <br>
      <img width="146" alt="typeorm 엔티티" src="https://github.com/user-attachments/assets/b8776f6d-ccc3-4386-a44a-711070df6647" /><br>
      <img width="339" alt="typeorm 엔티티 내부" src="https://github.com/user-attachments/assets/c57a41ea-10ff-4ff8-8a45-5dee9a470d73" /><br>


3. ORM 생성/수정/삭제 비교
    - TypeORM
      - 생성 : PK값 반환
      - 수정/삭제 :
        - 수정/삭제된 레코드 개수 affected 필드로 반환
        - update(), delete() 실행시 조건에 맞는 데이터가 없으면 에러가 발생하지 않고 단순히 affected 값이 0으로 반환됨 (=별도의 예외처리 로직을 구현해야 함)
      <br> [ TypeORM ] <br>
        <img width="461" alt="typeorm 생성 및 삭제 repository" src="https://github.com/user-attachments/assets/567db200-0875-473a-9a4e-c4410f7f2b27" /><br>
        <img width="1183" alt="typeorm 수정쿼리" src="https://github.com/user-attachments/assets/f39662e9-04b1-46ec-8fd6-95f6458656f6" /><br>
    - Prisma
      - 생성/수정/삭제 :
        - 기본적으로 생성/수정/삭제된 model객체 전체 반환
            - create(), update(), delete() 실행시 내부적으로 select 쿼리를 별도로 한번 더 실행함
        - select 또는 include 옵션을 사용하면 특정 필드만 반환 가능
        - update(), delete() 실행시 조건에 맞는 데이터가 없으면 PrismaClientKnownRequestError 예외가 발생함
      <br> [ Prisma ] <br>
        <img width="428" alt="prisma 생성 service" src="https://github.com/user-attachments/assets/4f656ddd-7096-46a5-9432-b34ef8cae1a5" /><br>
        <img width="267" alt="prisma 수정 service" src="https://github.com/user-attachments/assets/a6d415f3-2100-4dfb-b6b6-a755623d5a54" /><br>
        <img width="1048" alt="prisma 수정쿼리" src="https://github.com/user-attachments/assets/48fdaf0b-e1bb-4402-abcf-97a0bfaed842" /><br>
        

4. ORM 및 데이터 액세스 모듈 설정 비교
    <br> [ TypeORM ] <br>
    [ app.module.ts ]<br>
      <img width="362" alt="typeorm 설정" src="https://github.com/user-attachments/assets/9f314079-9757-4f71-80db-5fc0f9be3913" /><br>
    <br> [ Prisma ] <br>
      [ schema.prisma ] <br>
      <img width="196" alt="prisma orm 설정2" src="https://github.com/user-attachments/assets/e48b5d41-55f7-4a9c-b014-f8be11cbd925" /><br>
      [ .env ]<br>
      <img width="725" alt="prisma orm 설정4" src="https://github.com/user-attachments/assets/09632f13-3963-442a-ab7b-af25fdf8a9a9" /><br>
      [ prisma.service.ts ]<br>
      <img width="460" alt="prisma orm 설정6" src="https://github.com/user-attachments/assets/ac80d933-13ec-40c2-9621-0912e236cb59" /><br>


5. Relations 비교


6. Transaction 비교