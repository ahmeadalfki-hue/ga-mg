import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Target, Users, Award, Calendar, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">من نحن</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">فزعة الذكاء - أول منصة ذكاء اصطناعي سعودية مصممة خصيصاً لدعم العملية التعليمية</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">قصتنا</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>تأسست فزعة الذكاء في عام 2023 برؤية طموحة لتحويل التعليم في المملكة العربية السعودية من خلال تقنيات الذكاء الاصطناعي المتقدمة.</p>
                    <p>انطلقنا من إيماننا بأن كل طالب سعودي يستحق الحصول على دعم تعليمي مخصص وفعال، بغض النظر عن موقعه أو ظروفه.</p>
                    <p>اليوم، نفخر بخدمة آلاف الطلاب في جميع أنحاء المملكة، ونعمل باستمرار على تطوير منصتنا لتواكب أحدث التطورات في مجال الذكاء الاصطناعي والتعليم.</p>
                  </div>
                </div>
                <div className="bg-secondary/50 rounded-2xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><Calendar className="h-6 w-6 text-primary" /></div>
                      <div><h3 className="font-bold text-foreground mb-1">التأسيس</h3><p className="text-sm text-muted-foreground">2023</p></div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><Users className="h-6 w-6 text-primary" /></div>
                      <div><h3 className="font-bold text-foreground mb-1">الفريق</h3><p className="text-sm text-muted-foreground">مهندسين سعوديين ويمنيين</p></div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><Award className="h-6 w-6 text-primary" /></div>
                      <div><h3 className="font-bold text-foreground mb-1">الإنجازات</h3><p className="text-sm text-muted-foreground">خدمة آلاف الطلاب يومياً</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-8"><Target className="h-10 w-10" /></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">مهمتنا</h2>
              <p className="text-2xl md:text-3xl font-bold leading-relaxed">مساعدة 1 مليون طالب سعودي</p>
              <p className="text-lg opacity-90 mt-6 max-w-2xl mx-auto">نهدف إلى الوصول إلى مليون طالب سعودي بحلول عام 2030، وتقديم دعم تعليمي ذكي ومخصص لكل طالب في المملكة</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">فريقنا</h2>
                <p className="text-lg text-muted-foreground">نخبة من المهندسين والمطورين السعوديين واليمنيين</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"><Users className="h-10 w-10 text-primary" /></div>
                  <h3 className="text-xl font-bold text-foreground mb-2">فريق التطوير</h3>
                  <p className="text-muted-foreground">مهندسون سعوديون ويمنيون متخصصون في الذكاء الاصطناعي وتطوير البرمجيات</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"><Award className="h-10 w-10 text-primary" /></div>
                  <h3 className="text-xl font-bold text-foreground mb-2">فريق المحتوى التعليمي</h3>
                  <p className="text-muted-foreground">خبراء في المناهج السعودية لضمان جودة المحتوى التعليمي</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"><TrendingUp className="h-10 w-10 text-primary" /></div>
                  <h3 className="text-xl font-bold text-foreground mb-2">فريق الدعم</h3>
                  <p className="text-muted-foreground">فريق دعم فني متاح على مدار الساعة لمساعدة الطلاب والمعلمين</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">قيمنا</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-md"><h3 className="text-xl font-bold text-primary mb-3">الابتكار</h3><p className="text-muted-foreground">نستخدم أحدث تقنيات الذكاء الاصطناعي لتقديم حلول تعليمية مبتكرة</p></div>
                <div className="bg-white rounded-xl p-6 shadow-md"><h3 className="text-xl font-bold text-primary mb-3">الجودة</h3><p className="text-muted-foreground">نلتزم بأعلى معايير الجودة في المحتوى التعليمي والتقني</p></div>
                <div className="bg-white rounded-xl p-6 shadow-md"><h3 className="text-xl font-bold text-primary mb-3">الشمولية</h3><p className="text-muted-foreground">نهدف إلى الوصول إلى كل طالب سعودي في أي مكان في المملكة</p></div>
                <div className="bg-white rounded-xl p-6 shadow-md"><h3 className="text-xl font-bold text-primary mb-3">الأمان</h3><p className="text-muted-foreground">نحافظ على خصوصية وأمان بيانات المستخدمين وفقاً للأنظمة السعودية</p></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
