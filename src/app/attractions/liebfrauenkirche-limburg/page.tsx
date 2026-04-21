import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '林堡圣母教堂 Liebfrauenkirche Limburg｜俯瞰拉恩河的七塔传奇 - 最佳欧洲景点',
  description: '第一眼看到林堡圣母教堂，你绝对会“哇”出声来！它就像从童话里直接搬出来的城堡，雄赳赳地立在一块高高的岩石上，脚下就是蜿蜒的拉恩河和一片片红屋顶的老房子。最抓眼球的是它那七座高低错落的塔楼，在蓝天白云下特别有戏剧感。走进教堂里面，又是另一番天地，光线透过古老的彩绘玻璃窗洒下来，空气里混合着石头、蜡烛和...',
}

export default function LiebfrauenkircheLimburgPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '德国', href: '/destinations/germany' },
            { label: '林堡圣母教堂', href: '/attractions/liebfrauenkirche-limburg' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">林堡圣母教堂・Liebfrauenkirche Limburg・德国・林堡</h1>
          <p className="text-lg text-gray-600 mb-6">
            第一眼看到林堡圣母教堂，你绝对会“哇”出声来！它就像从童话里直接搬出来的城堡，雄赳赳地立在一块高高的岩石上，脚下就是蜿蜒的拉恩河和一片片红屋顶的老房子。最抓眼球的是它那七座高低错落的塔楼，在蓝天白云下特别有戏剧感。走进教堂里面，又是另一番天地，光线透过古老的彩绘玻璃窗洒下来，空气里混合着石头、蜡烛和岁月的气息，特别安静神圣。这里不光是主教座堂，更是整座城市的灵魂地标，无论你在老城的哪个角落抬头，几乎都能看到它守护着林堡。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">第一眼看到林堡圣母教堂，你绝对会“哇”出声来！它就像从童话里直接搬出来的城堡，雄赳赳地立在一块高高的岩石上，脚下就是蜿蜒的拉恩河和一片片红屋顶的老房子。最抓眼球的是它那七座高低错落的塔楼，在蓝天白云下特别有戏剧感。走进教堂里面，又是另一番天地，光线透过古老的彩绘玻璃窗洒下来，空气里混合着石头、蜡烛和岁月的气息，特别安静神圣。这里不光是主教座堂，更是整座城市的灵魂地标，无论你在老城的哪个角落抬头，几乎都能看到它守护着林堡。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="林堡圣母教堂" />
                <InfoRow label="英文名称" value="Liebfrauenkirche Limburg" />
                <InfoRow label="正式名称" value="Liebfrauenkirche Limburg" />
                <InfoRow label="国家" value="德国" />
                <InfoRow label="城市" value="林堡" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="教堂内部：每日 9:00 - 18:00（夏季至19:00）；教堂塔楼及珍宝馆：开放时间请查询官网或现场公告。" />
              <InfoRow label="门票价格" value="进入教堂免费；登塔及参观珍宝馆需购票，成人约5欧元，优惠票约3欧元。" />
              <InfoRow label="地址" value="Domplatz 1, 65549 Limburg an der Lahn, Germany" />
              <InfoRow label="交通方式" value="从法兰克福机场出发，乘坐区域火车（RB或RE线）至林堡（Limburg）火车站，车程约1小时。出站后步行约15分钟，穿过老城即可抵达教堂所在的山丘。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">林堡圣母教堂的故事，得从1200年左右说起。那时候，林堡的伯爵们决定在这块俯瞰河流的砂岩山丘上，建造一座能与他们地位相匹配的教堂。你猜怎么着？他们野心不小，想融合当时最流行的两种建筑风格：罗马式的厚重扎实和哥特式的高耸轻盈。所以我们现在看到的教堂，下半部分敦实有力，是典型的罗马式，而上半部分，特别是那些尖塔和窗户，已经开始向哥特式优雅地过渡了。这种“混搭”在当时可是相当前卫的尝试。1235年，教堂终于祝圣启用，并很快升格为主教座堂。几百年来，它经历了多次修缮，但基本样貌保存得出奇地好。19世纪时，人们还进行了一次大规模修复，并意外地在外墙发现了中世纪彩绘的痕迹，于是大胆地按照推测复原了那些鲜艳的红、白、赭石色彩绘，这才有了我们今天看到的、如此色彩斑斓宛如积木城堡的外墙。站在它面前，你仿佛能一眼看穿德国建筑史七八百年的演变，这种感觉真的很奇妙。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  游览建议从山脚下的老城开始，先远观教堂全景，然后沿坡道上山进入教堂广场。参观顺序建议为：教堂外部环览 → 主殿内部 → 侧廊与小礼拜堂 →（若开放）登塔俯瞰全城。全程悠闲游览约需1.5-2小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>上山的小路是鹅卵石铺的，建议穿一双舒适防滑的鞋子。教堂内部请保持安静。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从老城河畔远眺，拍摄教堂与拉恩河同框的经典明信片角度。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  穿过古老的石桥，沿着蜿蜒的上坡小路走近教堂广场。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  进入主殿，仰头欣赏高大的中殿穹顶和精美的管风琴。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  逐一参观两侧的彩绘玻璃窗和祭坛。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  绕行教堂外部一周，欣赏七塔结构和复原的彩色外墙。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  若体力允许且开放，登上一座塔楼，将林堡红屋顶全景尽收眼底。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  老桥（Alte Lahnbrücke）上</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或傍晚光线柔和时。从桥面向山丘方向拍摄，可以将教堂、岩石、拉恩河及水中倒影一同纳入画面，构图非常经典。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  教堂广场（Domplatz）东南角</h4>
                  <p className="text-sm text-gray-700">全天皆可，但下午阳光能较好照亮教堂西立面。仰拍角度可以完美展现七座塔楼参差错落的独特天际线，突出其城堡般的宏伟感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  主殿内中央走道尽头</h4>
                  <p className="text-sm text-gray-700">利用教堂内部柔和的光线。朝主祭坛方向拍摄，可以捕捉到纵深感的柱廊和从高处窗户射入的光束，氛围神圣肃穆。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 教堂内部允许拍照，但请勿使用闪光灯和三脚架，并务必尊重正在祷告的信徒。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端历史体验</h4>
                  <p className="text-sm text-blue-800">选择林堡老城内的精品酒店或历史建筑改造的酒店，开窗即见教堂塔楼。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  舒适便捷之选</h4>
                  <p className="text-sm text-green-800">火车站附近或拉恩河畔的中档酒店，交通便利，步行至教堂约10-15分钟。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济实惠</h4>
                  <p className="text-sm text-yellow-800">老城外围或邻近街区的家庭旅馆（Pension）或民宿，价格亲民，体验本地生活。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  特色住宿</h4>
                  <p className="text-sm text-purple-800">尝试拉恩河上的船屋酒店，享受从水面上欣赏教堂的独特视角。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旅游旺季（特别是夏季周末）建议提前预订，老城内的住宿非常抢手。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">林堡圣母教堂最打动我的，是它那种跨越时空的鲜活感。它不只是历史书里冷冰冰的建筑标本，而是带着一身斑斓色彩，生气勃勃地站在你面前。从河对岸的惊艳，到走进内部的宁静，再到登上塔顶的开阔，每一步都像在阅读这个小镇的立体故事。如果你来德国，想找一个不那么拥挤、却充满中世纪风情的地方，林堡和它的圣母教堂，绝对会给你满满的惊喜和治愈。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
