import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿尔卑纳城堡 Alpina Castle｜坐拥阿尔卑斯山全景的中世纪瑰宝 - 最佳欧洲景点',
  description: '嘿，如果你问我因斯布鲁克最难忘的瞬间，我一定会说是在阿尔卑纳城堡的塔楼上，被360度的阿尔卑斯山雪峰环抱的那一刻。这座城堡不像那些沉重压抑的古堡，它更像一位优雅的老绅士，穿着石砌的外衣，安静地坐在半山腰的绿坡上。走进庭院，你会立刻被那种混合着松木清香和历史尘埃的空气包围。阳光透过古老的拱廊洒下斑驳的...',
}

export default function AlpinaCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '阿尔卑纳城堡', href: '/attractions/alpina-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">阿尔卑纳城堡・Alpina Castle・奥地利・因斯布鲁克</h1>
          <p className="text-lg text-gray-600 mb-6">
            嘿，如果你问我因斯布鲁克最难忘的瞬间，我一定会说是在阿尔卑纳城堡的塔楼上，被360度的阿尔卑斯山雪峰环抱的那一刻。这座城堡不像那些沉重压抑的古堡，它更像一位优雅的老绅士，穿着石砌的外衣，安静地坐在半山腰的绿坡上。走进庭院，你会立刻被那种混合着松木清香和历史尘埃的空气包围。阳光透过古老的拱廊洒下斑驳的光影，城堡内部保留着中世纪骑士大厅的原貌，巨大的壁炉、沉重的木桌，仿佛下一秒就有穿着铠甲的骑士走进来。最妙的是，从任何一个窗口望出去，都是一幅绝美的雪山明信片，那种壮阔和宁静，真的会让人瞬间忘记所有烦恼。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">嘿，如果你问我因斯布鲁克最难忘的瞬间，我一定会说是在阿尔卑纳城堡的塔楼上，被360度的阿尔卑斯山雪峰环抱的那一刻。这座城堡不像那些沉重压抑的古堡，它更像一位优雅的老绅士，穿着石砌的外衣，安静地坐在半山腰的绿坡上。走进庭院，你会立刻被那种混合着松木清香和历史尘埃的空气包围。阳光透过古老的拱廊洒下斑驳的光影，城堡内部保留着中世纪骑士大厅的原貌，巨大的壁炉、沉重的木桌，仿佛下一秒就有穿着铠甲的骑士走进来。最妙的是，从任何一个窗口望出去，都是一幅绝美的雪山明信片，那种壮阔和宁静，真的会让人瞬间忘记所有烦恼。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="阿尔卑纳城堡" />
                <InfoRow label="英文名称" value="Alpina Castle" />
                <InfoRow label="正式名称" value="Alpina Castle" />
                <InfoRow label="国家" value="奥地利" />
                <InfoRow label="城市" value="因斯布鲁克" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="每日上午9:00至下午5:00（4月至10月）；上午10:00至下午4:00（11月至3月，周一闭馆）。" />
              <InfoRow label="门票价格" value="成人票：12欧元；学生/老人票：9欧元；6-15岁儿童：6欧元；6岁以下儿童免费；家庭票（2大2小）：30欧元。" />
              <InfoRow label="地址" value="Alpinaweg 1, 6020 Innsbruck, Austria" />
              <InfoRow label="交通方式" value="从因斯布鲁克火车站（Innsbruck Hauptbahnhof）乘坐414路公交车至“Alpina Castle”站下车，车程约25分钟。从因斯布鲁克机场驾车或乘坐出租车前往约需20分钟。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">阿尔卑纳城堡的故事始于13世纪中叶，最初是当地一位贵族为了控制通往因斯布鲁克的山路而修建的防御性堡垒。你能在城堡最古老的地基部分，触摸到那些粗糙的巨石，感受近八百年的重量。到了15世纪，城堡迎来了它的“黄金时代”，被当时统治蒂罗尔地区的哈布斯堡家族买下，改造成了一座兼具防御与居住功能的豪华官邸。我们现在看到的许多华丽的木雕天花板和彩绘玻璃窗，就是那个时期的产物。漫步在长廊里，我总忍不住想象，几百年前的贵族们是不是也这样，一边欣赏着同样的山景，一边商讨着领地大事。城堡在17世纪和19世纪经历过两次火灾和修复，最有趣的是，20世纪初它一度被一位热爱艺术的富商买下，他在城堡里收藏了大量中世纪盔甲和本地艺术品，这才形成了我们今天看到的博物馆雏形。二战期间它幸运地躲过了轰炸，如今作为州立博物馆向公众开放，感觉就像一位历经沧桑却依然健朗的历史讲述者。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  游览建议预留2-3小时。路线从城堡主入口庭院开始，依次参观内部博物馆、登上主塔楼，最后在城堡花园和观景平台结束，形成一个环形路线，终点可回到入口处的纪念品商店。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>塔楼楼梯狭窄且旋转陡峭，建议穿着舒适的平底鞋。城堡内部路线标识清晰，无需导航也能轻松游览。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从主门进入中央庭院，感受城堡的宏伟尺度。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  参观一楼骑士大厅与盔甲武器陈列馆。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  上二楼浏览贵族起居室与历史画廊。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  攀登西侧主塔楼，抵达顶层观景台。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  漫步至后方的巴洛克风格花园。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  在花园尽头的观景平台欣赏全景并折返。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  主塔楼观景台</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为晴朗的下午，阳光照亮对面雪山。使用广角镜头，将城堡的塔尖与连绵的阿尔卑斯山脉一同纳入画面，气势恢宏。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  城堡后方花园拱门处</h4>
                  <p className="text-sm text-gray-700">清晨或黄昏光线柔和时。透过石拱门框架式构图，拍摄远处雪山下的因斯布鲁克老城，层次感极佳。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  骑士大厅的彩绘玻璃窗前</h4>
                  <p className="text-sm text-gray-700">中午室内光线充足时。逆光拍摄人物剪影或玻璃窗色彩斑斓的细节，充满中世纪氛围。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 室内展览区禁止使用闪光灯。使用无人机拍摄需提前申请许可。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端历史体验</h4>
                  <p className="text-sm text-blue-800">入住城堡山脚附近的精品酒店“Hotel Goldener Adler”，本身是历史建筑，步行至城堡公交站约5分钟。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  舒适便利之选</h4>
                  <p className="text-sm text-green-800">选择因斯布鲁克老城中心的四星级酒店，交通餐饮便利，乘坐公交可轻松抵达城堡。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济实惠</h4>
                  <p className="text-sm text-yellow-800">预订老城边缘或火车站附近的民宿或青年旅舍，性价比高，搭乘公共交通也很方便。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  特色山景住宿</h4>
                  <p className="text-sm text-purple-800">考虑半山腰的家庭式公寓，部分房间可直接眺望城堡，体验宁静的山居生活。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旺季（夏季及圣诞期间）因斯布鲁克住宿紧张，建议尽早预订。选择老城区的住宿更能深入体验当地风情。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">阿尔卑纳城堡最打动我的，是它将历史的厚重与自然的壮美完美融合。它不仅仅是一座博物馆，更是一个能让你静下心来，与阿尔卑斯山对话的地方。无论是历史爱好者、摄影迷，还是单纯想找个地方放空自己，这里都能给你一份独一无二的感动。离开时，带回的不只是照片，更是一份关于山、城堡与时光的宁静记忆。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
