import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布伦古堡 Blenheim Palace｜丘吉尔庄园的巴洛克辉煌 - 最佳欧洲景点',
  description: '第一眼看到布伦古堡，你绝对会“哇”出声来！这根本不像一个“家”，而是一座用蜂蜜色石头砌成的史诗级艺术品，巨大、对称、气势磅礴地坐落在无边的绿野之上。走进宫殿内部，更是金碧辉煌到让人眼花缭乱——高耸的彩绘天花板、镶金的墙壁、数不清的名画和古董家具，每一处细节都在讲述着马尔堡公爵家族的荣耀与财富。但最让...',
}

export default function BlenheimPalacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '英国', href: '/destinations/united-kingdom' },
            { label: '伍德斯托克', href: '/destinations/united-kingdom' },
            { label: '布伦古堡', href: '/attractions/blenheim-palace' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">布伦古堡・Blenheim Palace・英国・伍德斯托克</h1>
          <p className="text-lg text-gray-600 mb-6">
            第一眼看到布伦古堡，你绝对会“哇”出声来！这根本不像一个“家”，而是一座用蜂蜜色石头砌成的史诗级艺术品，巨大、对称、气势磅礴地坐落在无边的绿野之上。走进宫殿内部，更是金碧辉煌到让人眼花缭乱——高耸的彩绘天花板、镶金的墙壁、数不清的名画和古董家具，每一处细节都在讲述着马尔堡公爵家族的荣耀与财富。但最让我着迷的，其实是走到宫殿后面，眼前豁然开朗：一片巨大的湖泊、精心修剪的法式花园和一眼望不到头的草坪，完美诠释了什么叫“英国乡村庄园的终极梦想”。在这里，历史和自然的美景以一种极其奢侈的方式结合在了一起。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">第一眼看到布伦古堡，你绝对会“哇”出声来！这根本不像一个“家”，而是一座用蜂蜜色石头砌成的史诗级艺术品，巨大、对称、气势磅礴地坐落在无边的绿野之上。走进宫殿内部，更是金碧辉煌到让人眼花缭乱——高耸的彩绘天花板、镶金的墙壁、数不清的名画和古董家具，每一处细节都在讲述着马尔堡公爵家族的荣耀与财富。但最让我着迷的，其实是走到宫殿后面，眼前豁然开朗：一片巨大的湖泊、精心修剪的法式花园和一眼望不到头的草坪，完美诠释了什么叫“英国乡村庄园的终极梦想”。在这里，历史和自然的美景以一种极其奢侈的方式结合在了一起。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="布伦古堡" />
                <InfoRow label="英文名称" value="Blenheim Palace" />
                <InfoRow label="正式名称" value="Blenheim Palace" />
                <InfoRow label="国家" value="英国" />
                <InfoRow label="城市" value="伍德斯托克" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="宫殿：每日上午10:30至下午5:30（最后入场时间为下午4:45）。公园与花园：每日上午9:00至下午6:00（或黄昏，以较早者为准）。" />
              <InfoRow label="门票价格" value="成人票（宫殿、公园与花园）：约35英镑。仅公园与花园门票：约28英镑。有多种家庭票、优惠票及年票选项，建议官网查询最新价格。" />
              <InfoRow label="地址" value="Woodstock OX20 1PP, United Kingdom" />
              <InfoRow label="交通方式" value="从伦敦帕丁顿火车站乘坐火车至牛津站（约1小时），然后转乘S3路公交车直达布伦古堡（约30分钟）。从牛津市中心打车前往约需20分钟。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">布伦古堡的故事，始于一场决定欧洲命运的战役。1704年，第一代马尔堡公爵约翰·丘吉尔在巴伐利亚的布伦海姆村大败法军，为了表彰他的赫赫战功，安妮女王将这片牛津郡的皇家猎场赐予他，并拨款修建一座宏伟的宫殿。从1705年动工，这座宫殿修建了整整二十多年，由当时顶尖的建筑师约翰·范布勒爵士设计，是英国巴洛克建筑风格的巅峰之作。然而，修建过程充满波折，资金一度短缺，公爵夫妇甚至与范布勒闹翻，最终由另一位建筑师完成。时光流转，这座宫殿最著名的后代，便是1874年在此出生的温斯顿·丘吉尔。虽然他并非公爵的直系继承人（他母亲在此生产纯属偶然），但布伦古堡无疑是他精神世界的重要部分，他晚年也长眠于附近的布雷顿教堂。如今，它依然是第12代马尔堡公爵的家族宅邸，但已作为联合国教科文组织世界遗产向公众开放，从一个军事胜利的纪念碑，变成了一个承载着国家历史、艺术和自然之美的活态博物馆。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  游览建议预留至少4-5小时。经典路线从气派的东门进入，先参观宫殿内部的主要国事厅和私人套房（约1.5-2小时），然后从南面出口进入梯田式花园，最后漫步至大湖和公园区域，绕湖一周后从原路或公园其他出口离开。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>宫殿内部路线是单向的，跟着语音导览的指引走即可。公园面积非常大，穿一双舒适的步行鞋至关重要。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从宏伟的东立面进入，参观大理石门厅和气势恢宏的大厅。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  依次游览国事厅，如挂满挂毯的长图书馆和金光闪闪的沙龙。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  参观温斯顿·丘吉尔的出生房间及相关展览。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  走出宫殿，欣赏南立面的壮丽景色和梯田式花园。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  沿着湖边小径散步，远观范布勒设计的浪漫石桥。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  探索广阔的公园，寻找“胜利之柱”等景观。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  宫殿南立面与水景</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为晴朗的下午，阳光洒在宫殿正面。站在梯田花园最下层的水池边，可以拍到宫殿、花园倒影和广阔天空的经典对称构图。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  大湖与范布勒石桥</h4>
                  <p className="text-sm text-gray-700">最佳时间为清晨或黄昏，光线柔和。从湖的东岸向西拍摄，可以将石桥、湖面倒影和远方的宫殿一同纳入画面，层次感极佳。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  玫瑰园拱门</h4>
                  <p className="text-sm text-gray-700">夏季花开时最佳。站在拱门下，以盛放的玫瑰花丛为前景，拍摄宫殿的一角，充满浪漫和细节美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  胜利之柱</h4>
                  <p className="text-sm text-gray-700">公园内的小山坡上。可以以高耸的纪念柱为焦点，拍摄它俯瞰整个庄园的远景，气势宏大。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 宫殿内部禁止拍照，请将拍摄热情尽情挥洒在外部建筑和风景如画的公园里。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端体验</h4>
                  <p className="text-sm text-blue-800">入住庄园内的“布伦古堡豪华套房”，真正体验公爵生活。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  特色B&B</h4>
                  <p className="text-sm text-green-800">选择伍德斯托克小镇上的精品民宿，如“The Feathers Hotel”，充满科茨沃尔德风情，步行即可到达古堡。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  便捷经济</h4>
                  <p className="text-sm text-yellow-800">住在牛津市中心，有丰富的酒店和青年旅舍选择，往返古堡交通便利，同时可以游览牛津大学。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  乡村度假</h4>
                  <p className="text-sm text-purple-800">在古堡周边的科茨沃尔德乡村租一栋田园小屋，享受静谧的英伦乡村夜晚。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旺季（特别是夏季和圣诞季）务必提前预订，伍德斯托克小镇的住宿非常抢手。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">布伦古堡带给我的，是一种跨越时空的震撼。它不仅仅是石头和花园的堆砌，更是权力、艺术、家族传奇与自然之美的完美融合。在这里，你能触摸到英国历史的厚重，也能在无边的绿意中找到内心的宁静。无论你是历史迷、建筑控，还是单纯想找个地方放空，布伦古堡都不会让你失望。它像一本立体的、活着的史书，值得你花上一整天，慢慢品读。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
