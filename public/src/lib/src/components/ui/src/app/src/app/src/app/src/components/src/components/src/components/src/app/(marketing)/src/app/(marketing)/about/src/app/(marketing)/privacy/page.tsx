import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"><Shield className="h-10 w-10 text-primary" /></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">سياسة الخصوصية</h1>
              <p className="text-xl text-muted-foreground">آخر تحديث: يوليو 2026</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><Shield className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">التوافق مع الأنظمة السعودية</h3>
                    <p className="text-muted-foreground leading-relaxed">فزعة الذكاء متوافق تماماً مع <span className="font-bold text-primary">نظام حماية البيانات الشخصية (PDPL)</span> في المملكة العربية السعودية. نلتزم بجميع المتطلبات القانونية والتنظيمية لحماية بيانات المستخدمين وفقاً للأنظمة الصادرة عن الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا).</p>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3"><Lock className="h-6 w-6 text-primary" />1. المعلومات التي نجمعها</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-3">
                    <p>نجمع المعلومات التالية لتقديم خدماتنا بشكل فعال:</p>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>المعلومات الشخصية: الاسم، البريد الإلكتروني، رقم الهاتف</li>
                      <li>معلومات الحساب: بيانات تسجيل الدخول والإعدادات</li>
                      <li>بيانات الاستخدام: كيفية استخدامك للمنصة والميزات</li>
                      <li>المحتوى التعليمي: الأسئلة والواجبات التي ترفعها</li>
                      <li>البيانات التقنية: نوع الجهاز، المتصفح، عنوان IP</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3"><Eye className="h-6 w-6 text-primary" />2. كيف نستخدم معلوماتك</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-3">
                    <p>نستخدم معلوماتك للأغراض التالية:</p>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>تقديم وتحسين خدماتنا التعليمية</li>
                      <li>تخصيص تجربة المستخدم وفقاً لاحتياجاتك</li>
                      <li>إرسال إشعارات وتحديثات مهمة</li>
                      <li>تحليل البيانات لتحسين المنصة (بعد إخفاء الهوية)</li>
                      <li>الامتثال للمتطلبات القانونية والتنظيمية</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3"><Database className="h-6 w-6 text-primary" />3. تخزين وحماية البيانات</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-3">
                    <p>نلتزم بأعلى معايير أمان البيانات:</p>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>تخزين جميع البيانات داخل المملكة العربية السعودية</li>
                      <li>استخدام تشفير متقدم (AES-256) لحماية البيانات</li>
                      <li>تطبيق بروتوكولات أمان صارمة للوصول إلى البيانات</li>
                      <li>إجراء فحوصات أمنية دورية</li>
                      <li>النسخ الاحتياطي المنتظم للبيانات</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3"><UserCheck className="h-6 w-6 text-primary" />4. حقوقك كمستخدم</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-3">
                    <p>وفقاً لنظام PDPL، لديك الحقوق التالية:</p>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>حق الوصول إلى بياناتك الشخصية</li>
                      <li>حق تصحيح البيانات غير الدقيقة</li>
                      <li>حق طلب حذف بياناتك</li>
                      <li>حق الاعتراض على معالجة بياناتك</li>
                      <li>حق نقل بياناتك إلى جهة أخرى</li>
                      <li>حق تقديم شكوى للجهة الرقابية</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3"><FileText className="h-6 w-6 text-primary" />5. مشاركة البيانات</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-3">
                    <p>لا نبيع أو نؤجر بياناتك الشخصية لأي طرف ثالث. قد نشارك البيانات في الحالات التالية فقط:</p>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>بموافقتك الصريحة</li>
                      <li>للامتثال للمتطلبات القانونية</li>
                      <li>مع مقدمي الخدمات المعتمدين (بعد توقيع اتفاقيات سرية)</li>
                      <li>لحماية حقوقنا وسلامة مستخدمينا</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. ملفات تعريف الارتباط (Cookies)</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-3">
                    <p>نستخدم ملفات تعريف الارتباط لتحسين تجربتك على المنصة. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك.</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. تحديثات سياسة الخصوصية</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-3">
                    <p>قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سنخطرك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على المنصة.</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. التواصل معنا</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-3">
                    <p>إذا كان لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية، يمكنك التواصل معنا عبر:</p>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>البريد الإلكتروني: privacy@fazaa-ai.sa</li>
                      <li>الهاتف: +966 11 234 5678</li>
                      <li>العنوان: الرياض، المملكة العربية السعودية</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-xl p-8 mt-12">
                <h3 className="text-xl font-bold text-foreground mb-4">مسؤول حماية البيانات</h3>
                <p className="text-muted-foreground leading-relaxed">لقد عيننا مسؤولاً متخصصاً لحماية البيانات للإشراف على امتثالنا لنظام PDPL والإجابة على استفساراتك. يمكنك التواصل مع مسؤول حماية البيانات عبر:</p>
                <p className="text-primary font-bold mt-4">dpo@fazaa-ai.sa</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
