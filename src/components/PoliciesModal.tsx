import React from 'react';
import { X, RotateCcw, Truck, FileCheck, ShieldCheck, Ban, CheckCircle2, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';
import { storeConfig } from '../config/store';

export type PolicyTab = 'cancellation' | 'returns' | 'shipping' | 'terms' | 'privacy';

interface PoliciesModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: PolicyTab;
  setActiveTab: (tab: PolicyTab) => void;
}

export const PoliciesModal: React.FC<PoliciesModalProps> = ({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/70">
          <div>
            <h3 className="font-extrabold text-base text-white">السياسات والاشتراطات الرسمية</h3>
            <p className="text-[11px] text-amber-400 mt-0.5">
              {storeConfig.companyNameAr} — سجل تجاري رقم: <span dir="ltr" className="font-bold font-mono">{storeConfig.cr}</span>
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs Bar */}
        <div className="flex border-b border-slate-800 bg-slate-950 text-xs overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('cancellation')}
            className={`flex items-center gap-1.5 px-4 py-3 font-bold border-b-2 whitespace-nowrap transition ${
              activeTab === 'cancellation' 
                ? 'border-amber-500 text-amber-400 bg-slate-900/60' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Ban className="w-4 h-4" />
            سياسة إلغاء الطلبات
          </button>

          <button
            onClick={() => setActiveTab('returns')}
            className={`flex items-center gap-1.5 px-4 py-3 font-bold border-b-2 whitespace-nowrap transition ${
              activeTab === 'returns' 
                ? 'border-amber-500 text-amber-400 bg-slate-900/60' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            الاستبدال والاسترجاع واسترداد الأموال
          </button>

          <button
            onClick={() => setActiveTab('shipping')}
            className={`flex items-center gap-1.5 px-4 py-3 font-bold border-b-2 whitespace-nowrap transition ${
              activeTab === 'shipping' 
                ? 'border-amber-500 text-amber-400 bg-slate-900/60' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Truck className="w-4 h-4" />
            الشحن والتوصيل
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-1.5 px-4 py-3 font-bold border-b-2 whitespace-nowrap transition ${
              activeTab === 'terms' 
                ? 'border-amber-500 text-amber-400 bg-slate-900/60' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileCheck className="w-4 h-4" />
            الشروط والأحكام
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-1.5 px-4 py-3 font-bold border-b-2 whitespace-nowrap transition ${
              activeTab === 'privacy' 
                ? 'border-amber-500 text-amber-400 bg-slate-900/60' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            سياسة الخصوصية
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 text-xs text-slate-300 leading-relaxed max-h-[65vh] overflow-y-auto space-y-4">
          
          {/* TAB 1: CANCELLATION */}
          {activeTab === 'cancellation' && (
            <div className="space-y-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4">
                <h4 className="font-bold text-amber-400 text-sm mb-1.5 flex items-center gap-2">
                  <Ban className="w-4 h-4" />
                  سياسة وضوابط إلغاء الطلبات (Cancellation Policy)
                </h4>
                <p className="text-slate-300 text-xs">
                  نحرص في <strong>{storeConfig.companyNameAr}</strong> على مرونة وسهولة تجربة التسوق. يمكنك طلب إلغاء طلبك وفق الضوابط التالية المتوافقة مع معايير وزارة التجارة السعودية وبوابات الدفع الإلكتروني:
                </p>
              </div>

              <div className="space-y-3">
                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    1. الإلغاء الفوري قبل تسليم الطلب لشركة الشحن:
                  </h5>
                  <p className="text-slate-400 text-[11px] leading-relaxed pr-5">
                    يحق للعميل إلغاء الطلب مجاناً وبدون أي خصومات أو رسوم إدارية إذا كانت حالة الطلب (قيد المراجعة أو التجهيز) وقبل تسليمه لشركة الشحن، أو خلال <strong>ساعة واحدة</strong> من وقت إتمام عملية الدفع الإلكتروني. يتم إلغاء الطلب فوراً وإعادة كامل المبلغ المدفوع بنسبة 100%.
                  </p>
                </div>

                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1.5 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    2. الإلغاء بعد إصدار بوليصة الشحن وتسليم الطرد للناقل اللوجستي:
                  </h5>
                  <p className="text-slate-400 text-[11px] leading-relaxed pr-5">
                    في حال تم إصدار بوليصة الشحن وتسليم الطلب لمندوب شركة الشحن بالفعل، يُعامل الطلب وفق "سياسة الاسترجاع بعد الاستلام". ويمكن للعميل رفض استلام الشحنة أو إعادتها بعد الاستلام، على أن يُخصم فقط قيمة بوليصة الشحن الفعلية ويُعاد باقي المبلغ لحساب العميل.
                  </p>
                </div>

                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    3. آلية وزمن استرداد المبالغ بعد الإلغاء:
                  </h5>
                  <p className="text-slate-400 text-[11px] leading-relaxed pr-5">
                    يتم استرداد الأموال تلقائياً إلى <strong>نفس وسيلة الدفع الأصلية</strong> المستخدمة عند الشراء (بطاقة مدى، فيزا، ماستركارد، أو أبل باي). يستغرق إيداع المبلغ بين <strong>3 إلى 7 أيام عمل</strong> وفقاً للنظام البنكي للبطاقة المصدرة.
                  </p>
                </div>

                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1.5 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-sky-400 shrink-0" />
                    4. إلغاء الطلب من قِبل إدارة المتجر:
                  </h5>
                  <p className="text-slate-400 text-[11px] leading-relaxed pr-5">
                    يحق للمتجر إلغاء الطلب في حالات استثنائية مثل: تعذر التحقق من صحة معلومات الدفع، أو نفاد الكمية المتوفرة في المستودعات، أو خطأ تسعيري تقني غير مقصود. في هذه الحالة يتم إشعار العميل فوراً وتتم إعادة المبلغ بالكامل خلال 24 ساعة.
                  </p>
                </div>
              </div>

              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-[11px] text-slate-400">
                <strong>لطلب الإلغاء السريع:</strong> يُرجى التواصل الفوري مع فريق خدمة العملاء عبر الواتساب على الرقم <span dir="ltr" className="text-amber-400 font-bold font-mono">+{storeConfig.whatsapp}</span> أو البريد <span className="text-amber-400 font-bold">{storeConfig.email}</span> مع ذكر رقم الطلب.
              </div>
            </div>
          )}

          {/* TAB 2: RETURNS & REFUNDS */}
          {activeTab === 'returns' && (
            <div className="space-y-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4">
                <h4 className="font-bold text-amber-400 text-sm mb-1.5 flex items-center gap-2">
                  <RotateCcw className="w-4 h-4" />
                  سياسة الاستبدال والاسترجاع واسترداد الأموال (Return & Refund Policy)
                </h4>
                <p className="text-slate-300 text-xs">
                  حرصاً من <strong>{storeConfig.companyNameAr}</strong> على تقديم أعلى درجات الثقة لعملائنا الكرام، تخضع كافة المنتجات (أدوات ومكائن القهوة المختصة، المطاحن، مستلزمات الباريستا، الأكواب، وأدوات الضيافة) لسياسة استبدال واسترجاع مرنة وفق نظام التجارة الإلكترونية الصادر عن وزارة التجارة بالمملكة العربية السعودية:
                </p>
              </div>

              <div className="space-y-3">
                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1.5">1. المدد الزمنية للاسترجاع والاستبدال:</h5>
                  <ul className="list-disc pr-5 space-y-1 text-slate-400 text-[11px]">
                    <li><strong>الاسترجاع:</strong> يحق للعميل طلب استرجاع المنتجات خلال <strong>7 أيام تقويمية</strong> من تاريخ استلام الشحنة.</li>
                    <li><strong>الاستبدال:</strong> يحق للعميل طلب استبدال المنتجات بمنتج بديل خلال <strong>14 يوماً</strong> من تاريخ الاستلام في حال وجود عيب مصنعي أو رغبة في استبدال الصنف.</li>
                  </ul>
                </div>

                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1.5">2. الشروط الواجب توفرها لقبول الاسترجاع:</h5>
                  <ul className="list-disc pr-5 space-y-1 text-slate-400 text-[11px]">
                    <li>أن يكون المنتج في حالته الأصلية الجديدة وغير مستخدم تماماً.</li>
                    <li>أن يكون المنتج محتفظاً بغلافه الأصلي، والكرتون، وكامل ملحقاته (كتيبات، كابلات، معايير، شهادات الضمان).</li>
                    <li>إرفاق الفاتورة الإلكترونية الأصلية أو رقم الطلب المعتمد.</li>
                  </ul>
                </div>

                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1.5">3. الحالات المستثناة من الاسترجاع:</h5>
                  <ul className="list-disc pr-5 space-y-1 text-slate-400 text-[11px]">
                    <li>محاصيل وأكياس القهوة المختصة التي تم فتح غلافها المفرغ من الهواء أو صمام الأمان؛ وذلك لأسباب تتعلق بسلامة الأغذية وحفظ النكهة.</li>
                    <li>المنتجات التي تعرضت لسوء استخدام أو كسر أو تلف نتيجة توصيلها بجهد كهربائي غير مناسب أو سوء تنظيف.</li>
                    <li>الأجهزة التي تم العبث بأرقامها التسلسلية أو محاولة صيانتها في ورش غير معتمدة.</li>
                  </ul>
                </div>

                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1.5">4. تكاليف الشحن عند الإرجاع والعيوب المصنعية:</h5>
                  <ul className="list-disc pr-5 space-y-1 text-slate-400 text-[11px]">
                    <li><strong>في حال وجود عيب مصنعي أو خطأ في تجهيز الطلب:</strong> تتحمل {storeConfig.companyNameAr} كامل تكاليف الشحن والإرجاع، ويتم استبدال المنتج فوراً أو رد كامل المبلغ بنسبة 100%.</li>
                    <li><strong>في حال رغبة العميل بالإرجاع دون عيب (تغيير الرأي مع بقاء المنتج بحالته الأصلية):</strong> يتحمل العميل تكلفة بوليصة شحن الإرجاع وقدرها <strong>{storeConfig.shippingCost} {storeConfig.currencySymbol}</strong>، ويُعاد باقي ثمن المنتج.</li>
                  </ul>
                </div>

                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1.5">5. آلية وزمن رد الأموال (Refund Timeline):</h5>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    عند وصول الطرد المسترجع إلى مستودعنا في مدينة جدة، يتم فحصه من قبل الفريق الفني خلال <strong>1 إلى 2 يوم عمل</strong>. وبعد التأكد من سلامته، يتم إيداع المبلغ في نفس وسيلة الدفع الأصلية (مدى / فيزا / ماستركارد / أبل باي). يستغرق ظهور المبلغ في كشف حساب العميل البنكي بين <strong>3 إلى 14 يوم عمل</strong> كحد أقصى.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SHIPPING */}
          {activeTab === 'shipping' && (
            <div className="space-y-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4">
                <h4 className="font-bold text-amber-400 text-sm mb-1.5 flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  سياسة الشحن والتوصيل لكافة مدن المملكة (Shipping & Delivery Policy)
                </h4>
                <p className="text-slate-300 text-xs">
                  نحرص في <strong>{storeConfig.companyNameAr}</strong> على تغليف شحنات أدوات ومكائن ومحاصيل القهوة بأعلى معايير الحماية والأمان، ونعمل مع كبرى شركات النقل اللوجستي المعتمدة في المملكة (سمسا إكسبريس، أرامكس، سبل البريد السعودي) لضمان سرعة الوصول وسلامة المنتجات.
                </p>
              </div>

              <div className="space-y-3">
                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-2">1. المدة المحددة للشحن والتوصيل بالأيام:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                    <div className="bg-slate-900 border border-slate-800 rounded-lg p-3">
                      <span className="text-amber-400 font-bold block mb-1">مدينة جدة والمناطق الرئيسية القريبة:</span>
                      <p className="text-slate-400 font-semibold">من 1 إلى 2 يوم عمل (24 - 48 ساعة)</p>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-lg p-3">
                      <span className="text-amber-400 font-bold block mb-1">كافة مدن ومحافظات المملكة الأخرى:</span>
                      <p className="text-slate-400 font-semibold">من 2 إلى 4 أيام عمل كحد أقصى</p>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1.5">2. رسوم وتكاليف الشحن:</h5>
                  <ul className="list-disc pr-5 space-y-1 text-slate-400 text-[11px]">
                    <li><strong>رسوم الشحن الثابتة:</strong> {storeConfig.shippingCost} {storeConfig.currencySymbol} لجميع مدن ومحافظات المملكة.</li>
                    <li><strong>الشحن المجاني:</strong> يحصل العميل على <strong>شحن مجاني تلقائي 100%</strong> عند وصول مجموع المشتريات إلى <strong>{storeConfig.freeShippingThreshold} {storeConfig.currencySymbol}</strong> أو أكثر دون الحاجة لأي كود خصم.</li>
                  </ul>
                </div>

                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1.5">3. التتبع المباشر للشحنات:</h5>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    بمجرد تسليم الطرد لشركة الشحن، يتلقى العميل رسالة نصية (SMS) وإشعاراً عبر الواتساب يحتوي على <strong>رقم التتبع المباشر</strong> ورابط الناقل لمتابعة خط سير الشحنة خطوة بخطوة حتى وصولها إلى باب العميل.
                  </p>
                </div>

                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1.5">4. تعليمات الاستلام والتأكد من الطرد:</h5>
                  <ul className="list-disc pr-5 space-y-1 text-slate-400 text-[11px]">
                    <li>يُرجى التأكد من صحة رقم الجوال والعنوان الوطني واسم المدينة المسجلة لتجنب تأخير المندوب.</li>
                    <li>نوصي بفحص الكرتون الخارجي والتأكد من سلامته قبل التوقيع على الاستلام، وفي حال وجود كسر أو تلف ظاهر نرجو تصوير الطرد وإبلاغنا فوراً.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: TERMS & CONDITIONS */}
          {activeTab === 'terms' && (
            <div className="space-y-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4">
                <h4 className="font-bold text-amber-400 text-sm mb-1.5 flex items-center gap-2">
                  <FileCheck className="w-4 h-4" />
                  الشروط والأحكام العامة (Terms & Conditions)
                </h4>
                <p className="text-slate-300 text-xs">
                  أهلاً بكم في <strong>{storeConfig.storeNameAr}</strong> التابع رسمياً لـ <strong>{storeConfig.companyNameAr}</strong>، المسجلة بوزارة التجارة بالمملكة العربية السعودية بالسجل التجاري الموحد رقم: <span dir="ltr" className="font-bold font-mono text-amber-400">{storeConfig.cr}</span>.
                </p>
              </div>

              <div className="space-y-3 text-[11px] text-slate-400">
                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1">1. الأسعار والعملة والضرائب:</h5>
                  <p className="leading-relaxed">
                    كافة الأسعار المعروضة في المتجر معتمدة بالعملة الرسمية <strong>الريال السعودي (SAR)</strong>، وتشمل ضريبة القيمة المضافة (VAT) المقررة بنسبة 15% بموجب نظام هيئة الزكاة والضريبة والجمارك رقم: <span dir="ltr" className="font-mono text-slate-300 font-bold">{storeConfig.taxNumber}</span>.
                  </p>
                </div>

                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1">2. أمان الدفع الإلكتروني:</h5>
                  <p className="leading-relaxed">
                    يوفر المتجر وسائل الدفع الإلكتروني المعتمدة رسمياً (مدى، فيزا، ماستركارد، أبل باي). تتم معالجة المعاملات المالية عبر قنوات مشفرة 256-bit SSL ومتوافقة مع المعيار العالمي لأمن بيانات بطاقات الدفع (PCI-DSS).
                  </p>
                </div>

                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1">3. ضمان الأجهزة الكهربائية:</h5>
                  <p className="leading-relaxed">
                    تخضع مكائن الإسبريسو ومطاحن القهوة الكهربائية لضمان الجودة ضد العيوب المصنعية لمدة <strong>سنتين (24 شهراً)</strong> وفق اشتراطات وزارة التجارة السعودية ووكلاء العلامات التجارية المعتمدين.
                  </p>
                </div>

                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1">4. حقوق الملكية الفكرية:</h5>
                  <p className="leading-relaxed">
                    كافة النصوص والصور والتصميمات والشعارات والعلامات التجارية المنشورة على هذا الموقع مملوكة حصراً لـ {storeConfig.companyNameAr} ومحمية بموجب الأنظمة السعودية لحماية حقوق المؤلف والملكية الفكرية.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4">
                <h4 className="font-bold text-amber-400 text-sm mb-1.5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  سياسة الخصوصية وحماية البيانات الشخصية (Privacy Policy)
                </h4>
                <p className="text-slate-300 text-xs">
                  تلتزم <strong>{storeConfig.companyNameAr}</strong> بأعلى معايير حماية البيانات الشخصية والأمن السيبراني، وتخضع سياسة الخصوصية لنظام حماية البيانات الشخصية (PDPL) المعمول به في المملكة العربية السعودية:
                </p>
              </div>

              <div className="space-y-3 text-[11px] text-slate-400">
                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1">1. جمع البيانات واستخدامها:</h5>
                  <p className="leading-relaxed">
                    نجمع البيانات الضرورية فقط لإتمام طلباتك وتوصيلها (مثل: الاسم، رقم الجوال، عنوان التوصيل الوطني، والبريد الإلكتروني). لا نقوم بجمع أو تخزين أرقام بطاقاتك البنكية أو أرقام CVV السرية نهائياً.
                  </p>
                </div>

                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1">2. حماية وتشفير المعاملات:</h5>
                  <p className="leading-relaxed">
                    يتم تمرير كافة المدفوعات عبر بوابات دفع بنكية معتمدة ومشفرة بأحدث بروتوكولات الأمان (HTTPS / SSL 256-bit). لا يحق لأي موظف في المتجر الوصول لبيانات الدفع الحساسة.
                  </p>
                </div>

                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1">3. مشاركة البيانات مع أطراف ثالثة:</h5>
                  <p className="leading-relaxed">
                    لا نبيع أو نؤجر أو نشارك أي بيانات شخصية مع أي جهة تجارية خارجية. تتم مشاركة الاسم ورقم الهاتف والعنوان حصراً مع شركة الشحن المعتمدة لتسليم الطلب إلى باب العميل.
                  </p>
                </div>

                <div className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40">
                  <h5 className="font-bold text-white text-xs mb-1">4. حقوق العميل وإدارة البيانات:</h5>
                  <p className="leading-relaxed">
                    يحق للعميل في أي وقت طلب تصحيح بياناته المسجلة أو حذف حسابه عبر التواصل مع مسؤول حماية البيانات عبر البريد الرسمي: <span className="text-amber-400 font-bold">{storeConfig.email}</span>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Official Entity Footer in Modal */}
          <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-slate-400 bg-slate-950/50 p-3.5 rounded-2xl">
            <div className="space-y-1">
              <p><strong className="text-white">المنشأة:</strong> {storeConfig.companyNameAr}</p>
              <p><strong className="text-white">السجل التجاري الموحد:</strong> <span dir="ltr" className="font-mono text-amber-400">{storeConfig.cr}</span></p>
              <p><strong className="text-white">الرقم الضريبي:</strong> <span dir="ltr" className="font-mono">{storeConfig.taxNumber}</span></p>
            </div>
            <div className="space-y-1">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{storeConfig.fullAddress}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${storeConfig.email}`} className="text-amber-400 hover:underline">{storeConfig.email}</a>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`https://wa.me/${storeConfig.whatsapp}`} dir="ltr" className="text-amber-400 hover:underline">+{storeConfig.whatsapp}</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

