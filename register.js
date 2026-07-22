const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const commands = [
    new SlashCommandBuilder()
        .setName('join')
        .setDescription('يدخل البوت إلى رومك الصوتي')
        .toJSON(),

    new SlashCommandBuilder()
        .setName('stats')
        .setDescription('يعرض إحصائيات السيرفر')
        .toJSON(),

    new SlashCommandBuilder()
        .setName('clear')
        .setDescription('حذف عدد من الرسائل')
        .addIntegerOption(option =>
            option
                .setName('amount')
                .setDescription('عدد الرسائل من 1 إلى 100')
                .setRequired(true)
                .setMinValue(1)
                .setMaxValue(100)
        )
        .toJSON(),

    new SlashCommandBuilder()
        .setName('panel')
        .setDescription('لوحة تحكم الأغاني')
        .toJSON(),

    new SlashCommandBuilder()
        .setName('ticketpanel')
        .setDescription('إرسال لوحة فتح التكتات')
        .toJSON()
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('REGISTER FILE IS RUNNING');
        console.log('جاري تسجيل الأوامر...');

        await rest.put(
            Routes.applicationGuildCommands(
                '1517902347135877220', // Application ID
                '1470219032002302046'  // Server ID
            ),
            { body: commands }
        );

        console.log('تم تسجيل الأوامر بنجاح');
    } catch (error) {
        console.error(error);
    }
})();
