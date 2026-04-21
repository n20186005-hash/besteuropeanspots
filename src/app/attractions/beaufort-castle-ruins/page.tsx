import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '博福尔城堡遗址 Beaufort Castle｜穿越八百年时光的层叠废墟与摩泽尔秘酿 - 最佳欧洲景点',
  description: '老实说，当我第一眼看到博福尔城堡时，它和我想象中那种童话般的、尖塔林立的城堡完全不同。它没有修缮一新，更没有金碧辉煌。车子穿过茂密的卢森堡森林，在一个安静得只听得到鸟鸣的小镇边缘停下，然后它就那样猝不及防地撞进视野——一片巨大的、沉默的、赭石色的石头废墟，雄踞在一座覆盖着墨绿色植被的山丘上。那种震撼...',
}

export default function BeaufortCastleRuinsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '卢森堡', href: '/destinations/luxembourg' },
            { label: '博福尔', href: '/destinations/luxembourg' },
            { label: '博福尔城堡遗址', href: '/attractions/beaufort-castle-ruins' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`博福尔城堡遗址・Beaufort Castle・卢森堡・博福尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`老实说，当我第一眼看到博福尔城堡时，它和我想象中那种童话般的、尖塔林立的城堡完全不同。它没有修缮一新，更没有金碧辉煌。车子穿过茂密的卢森堡森林，在一个安静得只听得到鸟鸣的小镇边缘停下，然后它就那样猝不及防地撞进视野——一片巨大的、沉默的、赭石色的石头废墟，雄踞在一座覆盖着墨绿色植被的山丘上。那种震撼是缓慢而持久的，像一块沉重的古石碑，猛地压在了心口。空气里弥漫着雨后泥土、青苔和古老石料混合的、清冷又略带潮湿的气味。走近了，能听见风穿过空荡窗洞的呜咽，以及远处森林里不知名鸟类的脆鸣。几个当地的老人正牵着狗在城堡外围的步道上散步，他们冲你点点头，眼神里有一种“你又来了一位朝圣者”的了然。这里不是那种被旅游大巴包围的景点，它是小镇日常生活的一个宁静背景，是当地人饭后散步的终点站。
它的核心魅力，恰恰在于这种“未完成”的废墟状态。你不是在看一个被精心包装好的历史模型，而是在亲手触摸时间本身。阳光从坍塌的塔楼顶部倾泻而下，在长满野草的内院地面上投下变幻莫测的光影。你可以清晰地在墙体上看到不同时代的“补丁”：粗糙的罗马式基石、更规整的哥特式拱券、还有后来增添的、带有文艺复兴风格雕花的窗框遗迹。每一块石头都仿佛在低语，讲述着不同主人的野心、恐惧与日常生活。当你手脚并用地爬上主塔楼的残垣，扶着冰凉而粗糙的石壁极目远眺，眼前是延绵不绝的、如波浪般的阿登森林，那一刻，你突然就理解了“领主”二字的含义——这视野所及，都曾是他的疆域，他的呼吸与这片土地的脉动紧密相连。
最让我着迷的是一种强烈的“层叠感”。这不是一次建成的城堡，而是一次次扩建、加固、废弃、再部分重建的产物。像翻阅一本被水浸过、字迹模糊却又异常厚重的古书，你能隐约分辨出不同章节的笔迹。早期的防御工事低矮而坚固，充满了实用主义的冷酷；后来添加的居住翼楼，尽管只剩下骨架，却能从残存的壁炉和窗饰想象出当年领主对舒适生活的追求。这种物理上的层叠，构成了精神上的深度。它没有给你一个确切的答案，而是抛给你无数个关于兴衰、战争、家族与权力的问题，让你在断壁残垣间自己寻找线索。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`老实说，当我第一眼看到博福尔城堡时，它和我想象中那种童话般的、尖塔林立的城堡完全不同。它没有修缮一新，更没有金碧辉煌。车子穿过茂密的卢森堡森林，在一个安静得只听得到鸟鸣的小镇边缘停下，然后它就那样猝不及防地撞进视野——一片巨大的、沉默的、赭石色的石头废墟，雄踞在一座覆盖着墨绿色植被的山丘上。那种震撼是缓慢而持久的，像一块沉重的古石碑，猛地压在了心口。空气里弥漫着雨后泥土、青苔和古老石料混合的、清冷又略带潮湿的气味。走近了，能听见风穿过空荡窗洞的呜咽，以及远处森林里不知名鸟类的脆鸣。几个当地的老人正牵着狗在城堡外围的步道上散步，他们冲你点点头，眼神里有一种“你又来了一位朝圣者”的了然。这里不是那种被旅游大巴包围的景点，它是小镇日常生活的一个宁静背景，是当地人饭后散步的终点站。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，恰恰在于这种“未完成”的废墟状态。你不是在看一个被精心包装好的历史模型，而是在亲手触摸时间本身。阳光从坍塌的塔楼顶部倾泻而下，在长满野草的内院地面上投下变幻莫测的光影。你可以清晰地在墙体上看到不同时代的“补丁”：粗糙的罗马式基石、更规整的哥特式拱券、还有后来增添的、带有文艺复兴风格雕花的窗框遗迹。每一块石头都仿佛在低语，讲述着不同主人的野心、恐惧与日常生活。当你手脚并用地爬上主塔楼的残垣，扶着冰凉而粗糙的石壁极目远眺，眼前是延绵不绝的、如波浪般的阿登森林，那一刻，你突然就理解了“领主”二字的含义——这视野所及，都曾是他的疆域，他的呼吸与这片土地的脉动紧密相连。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最让我着迷的是一种强烈的“层叠感”。这不是一次建成的城堡，而是一次次扩建、加固、废弃、再部分重建的产物。像翻阅一本被水浸过、字迹模糊却又异常厚重的古书，你能隐约分辨出不同章节的笔迹。早期的防御工事低矮而坚固，充满了实用主义的冷酷；后来添加的居住翼楼，尽管只剩下骨架，却能从残存的壁炉和窗饰想象出当年领主对舒适生活的追求。这种物理上的层叠，构成了精神上的深度。它没有给你一个确切的答案，而是抛给你无数个关于兴衰、战争、家族与权力的问题，让你在断壁残垣间自己寻找线索。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`博福尔城堡遗址`} />
                <InfoRow label="英文名称" value={`Beaufort Castle`} />
                <InfoRow label="正式名称" value={`博福尔城堡遗址 (Beaufort Castle Ruins)`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`博福尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`卢森堡东部最具代表性的中世纪封建城堡遗迹之一，见证了从罗马式到文艺复兴风格近八百年的建筑演变史。`} />
                <InfoRow label="建筑特色" value={`由不同时期建造的、层层叠叠的防御工事与生活区废墟构成，宛如一部立体的石头编年史。`} />
                <InfoRow label="建筑风格" value={`以12世纪罗马式地基为基础，融合了哥特式军事扩建与16世纪文艺复兴风格的居住翼楼。`} />
                <InfoRow label="文化价值" value={`它不仅是一座废弃的堡垒，更是理解卢森堡作为“千堡之国”及其封建领主制历史的绝佳实物教材。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`每年四月一日至十月三十一日，每日上午9:00至下午17:30开放。十一月一日至次年三月三十一日期间，城堡外部区域可自由参观，但内部核心废墟区域仅限周末（周六和周日）的上午10:00至下午16:30开放，且需在游客中心预约导览。圣诞节（12月24-26日）及元旦（1月1日）全天关闭。注意：最后入场时间为关闭前45分钟。`} />
              <InfoRow label="门票价格" value={`标准成人票：5欧元。青少年票（13-18岁）：3欧元。儿童（12岁及以下）：免费。家庭票（2位成人+最多3名儿童）：12欧元。持有卢森堡卡可免费入场。门票包含一份多语种（含中文）的详细导览手册。现场不提供电子语音导览器租赁。`} />
              <InfoRow label="地址" value={`24 Rue du Château, 6310 Beaufort, Luxembourg`} />
              <InfoRow label="交通方式" value={`从卢森堡市出发最为便捷。在卢森堡中央火车站（Gare Centrale）外的公交枢纽，乘坐111路或171路公共汽车，方向为“Echternach”或“Diekirch”。在“Beaufort, Um Knupp”站下车，车程约50分钟，班次在工作日每小时1-2班，周末每小时1班。下车后沿清晰的路标步行约10分钟即可抵达城堡山脚。建议使用卢森堡全国通用的“mKaart”交通卡，日票仅需4欧元可无限次乘坐全国所有公共交通，在火车站或自动售票机均可购买。自驾的话，从卢森堡市沿N11/E29公路向东行驶约30公里，城堡附近有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一块岩石开始。大约在公元11世纪，也许更早，有人看中了博福尔这块突出于埃希特纳赫河谷的岩石高地。最初的建造者已湮没无闻，历史记载中“博福尔”这个名字第一次出现，是在1192年的一份文件中。可以想象，在那个群雄割据、弱肉强食的年代，一个家族需要一块易守难攻的基地来保护自己、威慑对手。最早的城堡很可能只是一个简陋的、用木栅栏围起来的罗马式石塔，也就是我们现在还能在废墟核心区看到的那个最敦实、最古老的部分。它的主人，最初只是效忠于卢森堡伯爵或特里尔大主教的普通骑士。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点发生在12世纪末到13世纪，城堡转入了“冯·博福尔”家族手中。这个家族可不简单，他们雄心勃勃，开始将这座简陋的据点改造成一个真正的军事堡垒。我们今天看到的城堡主体轮廓，大部分是这个时期的产物。他们加高了塔楼，扩建了带有厚重城墙的内院，挖深了护城河（虽然现在里面长满了植物）。博福尔家族通过联姻和战功，势力逐渐扩大，城堡也随之不断“成长”，像一只盘踞在岩石上的石兽，日益狰狞。城堡的命运总是与主人的命运交织在一起，当家族显赫时，石头也被赋予荣光；当家族衰落时，石头也跟着蒙尘。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的车轮滚滚向前，到了文艺复兴的16世纪。火药和大炮的出现，让高耸的石墙变得越来越脆弱。当时的城堡主人，可能是觉得祖传的堡垒既阴冷又不舒适，于是做了一件很有意思的事：他们没有抛弃老城堡，而是在紧挨着中世纪核心区的旁边，兴建了一座全新的、带有大型窗户和精美装饰的文艺复兴风格宫殿。你可以想象那个画面：一边是父辈留下的、象征着武力和权威的阴暗堡垒，一边是子辈建造的、追求光线和享乐的明亮宅邸。两座建筑肩并肩地站在一起，一个像严肃古板的老骑士，一个像风流倜傥的年轻贵族，共同诉说着时代价值观的变迁。可惜，这座漂亮的宫殿并未享受太久的荣光。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`17世纪，欧洲陷入了三十年战争的泥潭。卢森堡地区成为各方势力争夺的战场，博福尔城堡也难以幸免。据说它曾被法国军队占领并部分摧毁。战争结束后，城堡的军事价值已基本归零，那个漂亮的文艺复兴宫殿也逐渐被遗弃。在接下来的两百年里，它就像一个被遗忘的巨人，慢慢地被风雨侵蚀，被藤蔓缠绕，沦为当地牧民偶尔避雨的场所和孩子们探险的乐园。石头一块块剥落，木梁腐朽坍塌，它沉入了漫长的睡眠，直到被现代的历史保护意识唤醒。20世纪初，卢森堡政府开始系统地保护和修缮这处重要的国家遗产，不是为了把它恢复原状，而是为了稳住它的衰老，让后人依然能读到这部石头的史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`强烈建议安排一个完整的上午或午后（至少3-4小时）来慢慢品味这里。最好在开门后不久（比如9:30）抵达，这时晨光柔和，游客稀少，你能独享废墟的宁静。整体游览节奏应该是“先外后内，先远观后细品”。不要急着冲进废墟，先花点时间绕城堡外围走半圈，从各个角度欣赏它与自然环境融为一体的雄姿。然后进入核心区，按照从古老到相对“年轻”的顺序探索，最后登上制高点。这样的安排能让你清晰地感受到建筑在时间轴上的演进，就像在徒步阅读一本立体的历史书。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双防滑、结实的徒步鞋，废墟内部地面不平，常有碎石和湿滑的青苔。
城堡内部几乎没有遮阴处和休息座椅，晴天游览记得戴帽子和带水，雨天则要格外小心脚下。
如果对历史细节特别感兴趣，可以在游客中心询问是否有英语或法语的导览团，讲解员能告诉你许多手册上没有的野史趣闻。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡东侧的古老护城河（现在已是芳草萋萋的深谷）开始仰望，感受它最初的防御威慑力。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过低矮的门洞进入最内层的中世纪核心区，用手触摸那些超过八百年历史、冰冷而粗糙的罗马式基石。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在曾是领主大厅的废墟中央静立片刻，想象壁炉火光摇曳时，骑士与贵族们在此喧哗畅饮的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找连接中世纪城堡与文艺复兴宫殿的那道狭窄石门，体验从阴暗压抑到（残存的）开阔明亮的瞬间转换。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探索文艺复兴翼楼的地窖，那里曾储藏着食物与美酒，如今空荡中仍仿佛留有橡木桶的余香。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着残存的城墙步道小心行走，从不同高度的豁口眺望外面无边的阿登森林绿海。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定不要错过城堡脚下由同一家族经营了上百年的博福尔酒庄，品尝一口用摩泽尔河畔葡萄酿造的、带有本地风土精髓的雷司令白葡萄酒。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`护城河外侧仰角`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光能完美勾勒出城堡废墟参差不齐的剪影与丰富的岩石纹理，用广角镜头将其与前景的野花或树木一同纳入。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中世纪内院拱门下`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射入院内，站在罗马式拱门的阴影里向外拍摄，能形成强烈的明暗对比，拍出“穿越时光之门”的深邃感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`文艺复兴宫殿残窗框架景`}</h4>
                  <p className="text-sm text-gray-700">{`找到一个保存相对完好的石雕窗框，以其为画框，聚焦于窗外随风摇曳的树冠或远处田野，营造现实与废墟的诗意对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`主塔楼废墟顶端`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时登顶，将相机放在残墙之上，拍摄夕阳将你的影子和废墟的影子一起长长地投射在下方草地上的画面，意境苍凉。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡西侧远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`沿步道向西走约200米，有一处开阔地，可在此用长焦镜头压缩空间，拍摄城堡废墟与小镇红色屋顶和谐共存的远景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`无人机飞行在卢森堡受到严格管制，在文化遗产上空飞行基本被禁止，请勿尝试。`}</li>
                <li>• {`尊重古迹，避免为了拍照而攀爬明确标识禁止的区域或踩踏脆弱的遗迹。`}</li>
                <li>• {`阴雨天气其实是拍摄废墟的绝佳时机，湿漉漉的石壁色彩更饱和，氛围感更强，记得为相机做好防水措施。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨民宿`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在博福尔镇上由家族经营的“金羊旅馆”，房间朴实无华但一尘不染，早餐的蜂蜜来自房东自家的蜂箱，晚上能享受到小镇真正的宁静。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`距离城堡车程15分钟的“埃希特纳赫修道院之城”中心，有一家由17世纪联排别墅改造的精品酒店，古老的木梁与现代设计结合，晚上可漫步于充满活力的修道院广场。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车25分钟前往摩泽尔河畔的雷米希小镇，入住河岸边的葡萄园庄园酒店，在露台上一边品着酒店自产的起泡酒，一边眺望河谷对岸的绵延葡萄梯田。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`露营自然派`}</h4>
                  <p className="text-sm text-purple-800">{`如果是夏季自驾前来，不妨体验卢森堡设施完善的露营地，在离城堡不远的森林营地住上一晚，在星空与松涛声中入睡。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`卢森堡乡村地区住宿数量有限，尤其在夏季和周末，务必提前数周甚至数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇治安极好，几乎可以夜不闭户，但夜晚街道照明较暗，散步时建议自带手电。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在卢森堡市，虽然交通方便，但会失去清晨或黄昏独享城堡废墟静谧的珍贵体验，请权衡取舍。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开博福尔很久以后，那片废墟的意象还会时不时地浮现在脑海里。它不像那些保存完好的宫殿，给你一种封闭的、定格的历史结论。恰恰相反，它的残缺和开放，赋予了你无限解读和想象的空间。在这里，历史不是博物馆玻璃柜里冰冷的展品，而是你可以倚靠、触摸，甚至能感受到其温度与重量的存在。你会思考，所谓“永恒”是多么虚幻，强盛如斯的封建家族，坚固如斯的石头城堡，最终都在时间面前化为了供人凭吊的风景。但这种“消逝”本身，又孕育出一种震撼人心的美——废墟之美。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求效率、迷恋崭新和完整的快节奏世界里，博福尔这样的地方是一种必要的“减速带”。它强迫你慢下来，用脚步丈量，用双手感知，用想象力去填补空白。它告诉你，文明的过程不仅是建造，也包含衰败与沉淀；美的形式不仅是辉煌夺目，也可以是苍凉与静默。对于每一位不满足于走马观花，渴望与目的地进行精神对话的深度旅人来说，博福尔城堡遗址都不该被错过。它是一次与时间本身的坦诚对视，在那片层叠的石头记忆里，你或许也能窥见自己生命旅程的某些倒影。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/beaufort-castles" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博福尔城堡遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Beaufort Castles</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/valkenburg-castle-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    法
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">法尔肯堡废墟城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Valkenburg Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/echternach-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃希特纳赫修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Echternach Abbey</p>
                  </div>
                </div>
              </a>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
