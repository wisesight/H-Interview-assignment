# H-Interview-assignment

เรากำลังทำ Open source framework สำหรับการแจกจ่ายวัคซีน ซึ่ง API คนใช้งานคือหมอที่กำลังจะออกไปฉีดให้คนไข้ สามารถเช็คได้ว่ามีคนไข้คนไหนจองและชำระเงินและต้องการวัคซีนประเภทไหนอยู่บ้าง ช่วยพวกเรา implement framework นี้ให้สมบูรณ์ ซึ่งพวกเราได้วางแผน API ไว้บางส่วน และเขียน TDD ไว้เรียบร้อยแล้ว

- Fork git repo นี้ออกไปแล้วสร้าง Pull request กลับมา
- ผ่าน Unittest ทั้งหมด (ห้ามแก้ไข unittest)
- (Optional) แก้ไข Database.ts ให้ field `vaccineAppointmentDate` สามารถค้นหาด้วย date range ได้
- (Optional) เขียน Unittest ของการค้นหา Date จากข้อขางบน
- (Optional) เขียน Dockerfile

## Stack requirement
```
node 14
typescript 4.3
express 4.17
jest 27
```
## Command

```
npm run start // for run service
npm run test // for run test
```
