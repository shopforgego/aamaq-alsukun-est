import React from 'react';
import { ShieldCheck, Truck, RefreshCw, Headphones, CheckCircle } from 'lucide-react';
import { storeConfig } from '../config/store';

export const Features: React.FC = () => {
  return (
    <section className="py-6 border-b border-current/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-amber-100 hover:border-amber-600 shadow-sm hover:shadow-xl p-4 rounded-2xl flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 text-amber-700">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold">بن أرابيكا 100% مختص</h4>
              <p className="text-[11px] opacity-70 mt-0.5">محاصيل طازجة بإيحاءات وتاريخ تحميص دقيق</p>
            </div>
          </div>

          <div className="bg-white border border-amber-100 hover:border-amber-600 shadow-sm hover:shadow-xl p-4 rounded-2xl flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 text-amber-700">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold">أدوات باريستا احترافية</h4>
              <p className="text-[11px] opacity-70 mt-0.5">مطاحن، فلاتر، وأكواب سيراميك معتمدة</p>
            </div>
          </div>

          <div className="bg-white border border-amber-100 hover:border-amber-600 shadow-sm hover:shadow-xl p-4 rounded-2xl flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 text-amber-700">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold">شحن سريع محكم الغلق</h4>
              <p className="text-[11px] opacity-70 mt-0.5">يحافظ على عبق ونكهة القهوة طازجة</p>
            </div>
          </div>

          <div className="bg-white border border-amber-100 hover:border-amber-600 shadow-sm hover:shadow-xl p-4 rounded-2xl flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 text-amber-700">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold">دليل التحضير المجاني</h4>
              <p className="text-[11px] opacity-70 mt-0.5">وصفات تقطير متقنة مرفقة مع كل محصول</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
