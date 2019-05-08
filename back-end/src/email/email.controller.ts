import { Controller, Get, Res } from '@nestjs/common';
import { MailerService } from '@nest-modules/mailer';
import config from '../config/keys.config';
import { ApiUseTags } from '@nestjs/swagger';
@ApiUseTags('Email')
@Controller('email')
export class EmailController {
    constructor(private readonly mailerService: MailerService) { }

    @Get('order')
    createOrder(@Res() res) {
        // const email = {
        //     Myname: 'nguyen dai',
        //     Address: 'Ha Noi',
        //     Age: "22+1"
        // }
        // this.emailService.example2().then(x=>{
        //     console.log(x);

        //     res.send(x);
        // });
        this.mailerService.sendMail({
            from: config.EMAIL,
            to: 'n15dccn062@student.ptithcm.edu.vn',
            subject: 'Thông tin mua hàng từ trang web thương mại điện tử ✔',
            template: 'email', // The `.pug` or `.hbs` extension is appended automatically.
            context: {  // Data to be sent to template engine.
                fullname: 'Nguyễn Trọng Đại',
                age: 23,
                address: "Hà Nội",
                phonenumber: "037.562.9888",
                "email": "ngtrdai290197@gmail.com"
            },
        }).then((result) => {
            if (result) {
                console.log(result);
                res.send(result)
            } else {
                throw result;
            }
        }).catch((err) => { throw err; });
    }
}
