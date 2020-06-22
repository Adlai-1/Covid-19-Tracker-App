import React from 'react';
import {Text, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const string4 = 
`Protection measures for everyone

Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority. Many countries around the world have seen cases of COVID-19 and several have seen outbreaks. Authorities in China and some other countries have succeeded in slowing or stopping their outbreaks. However, the situation is unpredictable so check regularly for the latest news.

You can reduce your chances of being infected or spreading COVID-19 by taking some simple precautions:

☑ Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.
☑ Maintain at least 1 meter (3 feet) distance between yourself and anyone who is coughing or sneezing. Why? When someone coughs or sneezes, they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease.
☑ Avoid touching eyes, nose and mouth. Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.
☑ Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately. Why? Droplets spread virus. By following good respiratory hygiene, you protect the people around you from viruses such as cold, flu and COVID-19.
☑ Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.
Why? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.
☑ Keep up to date on the latest COVID-19 hotspots (cities or local areas where COVID-19 is spreading widely). If possible, avoid traveling to places – especially if you are an older person or have diabetes, heart or lung disease. Why? You have a higher chance of catching COVID-19 in one of these areas.`



const View_1 = ({title,content})=>{
  return(
    <View style={{padding:10,backgroundColor:"#e3e3e3",borderRadius:8,marginBottom:10}}>
    <Text style={{fontWeight:"bold",fontSize:18,padding:5}}>{title}</Text>
    <Text style={{marginTop:8}}>{content}</Text>
  </View>
  )
}
const Data = [{id:'1',title:"What is Corona Virus?",content:"Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus."},
{id:'2',title:"What are the Symptoms of Corona Virus?",content:"The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but don’t develop any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and difficulty breathing should seek medical attention."},
{id:'3',title:"How does Covid-19 Spread?",content:"People can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch COVID-19 if they breathe in droplets from a person with COVID-19 who coughs out or exhales droplets. This is why it is important to stay more than 1 meter (3 feet) away from a person who is sick."},
{id:'4',title:"What can I do to protect myself and prevent the Spread of the disease?",content:string4},
{id:'5',title:"How likely am I to catch Covid-19?",content:"The risk depends on where you are - and more specifically, whether there is a COVID-19 outbreak unfolding there. For most people in most locations the risk of catching COVID-19 is still low. However, there are now places around the world (cities or areas) where the disease is spreading. For people living in, or visiting, these areas the risk of catching COVID-19 is higher. Governments and health authorities are taking vigorous action every time a new case of COVID-19 is identified. Be sure to comply with any local restrictions on travel, movement or large gatherings. Cooperating with disease control efforts will reduce your risk of catching or spreading COVID-19.COVID-19 outbreaks can be contained and transmission stopped, as has been shown in China and some other countries. Unfortunately, new outbreaks can emerge rapidly. It’s important to be aware of the situation where you are or intend to go. WHO publishes daily updates on the COVID-19 situation worldwide."},
{id:'6',title:"Should I worry about Covid-19?",content:"Not yet. To date, there is no vaccine and no specific antiviral medicine to prevent or treat COVID-2019. However, those affected should receive care to relieve symptoms. People with serious illness should be hospitalized. Most patients recover thanks to supportive care. Possible vaccines and some specific drug treatments are under investigation. They are being tested through clinical trials. WHO is coordinating efforts to develop vaccines and medicines to prevent and treat COVID-19.The most effective ways to protect yourself and others against COVID-19 are to frequently clean your hands, cover your cough with the bend of elbow or tissue, and maintain a distance of at least 1 meter (3 feet) from people who are coughing or sneezing."},
{id:'7',title:"Who is at risk of developing Severe illness?",content:"While we are still learning about how COVID-2019 affects people, older persons and persons with pre-existing medical conditions (such as high blood pressure, heart disease, lung disease, cancer or diabetes) appear to develop serious illness more often than others."},
{id:'8',title:"Are antibiotics effective for preventing or treating the Covid-19?",content:"No. Antibiotics do not work against viruses, they only work on bacterial infections. COVID-19 is caused by a virus, so antibiotics do not work. Antibiotics should not be used as a means of prevention or treatment of COVID-19. They should only be used as directed by a physician to treat a bacterial infection."},
{id:'9',title:"Are there any medicines or therapy that can prevent or cure Covid-19?",content:"While some western, traditional or home remedies may provide comfort and alleviate symptoms of COVID-19, there is no evidence that current medicine can prevent or cure the disease. WHO does not recommend self-medication with any medicines, including antibiotics, as a prevention or cure for COVID-19. However, there are several ongoing clinical trials that include both western and traditional medicines."},
{id:'10',title:"Is there a vaccine,drug or treatment for Covid-19?",content:"Not yet. To date, there is no vaccine and no specific antiviral medicine to prevent or treat COVID-2019. However, those affected should receive care to relieve symptoms. People with serious illness should be hospitalized. Most patients recover thanks to supportive care. Possible vaccines and some specific drug treatments are under investigation. They are being tested through clinical trials. WHO is coordinating efforts to develop vaccines and medicines to prevent and treat COVID-19.The most effective ways to protect yourself and others against COVID-19 are to frequently clean your hands, cover your cough with the bend of elbow or tissue, and maintain a distance of at least 1 meter (3 feet) from people who are coughing or sneezing."},
{id:'11',title:"What alternatives do I have if there are no hand sanitizers availabel? Can I use alchol like ethyl or liquor?",content:"If hand sanitizers are not available, hand washing with soap and water is the recommended, and even better, alternative. Liquor is not effective against coronavirus. For an alcohol-based hand rub to be effective, it must have an alcohol content of 60% to 95%."},
{id:'12',title:"Should I wear mask to protect myself?",content:"Only wear a mask if you are ill with COVID-19 symptoms (especially coughing) or looking after someone who may have COVID-19. Disposable face mask can only be used once. If you are not ill or looking after someone who is ill then you are wasting a mask. There is a world-wide shortage of masks, so WHO urges people to use masks wisely. WHO advises rational use of medical masks to avoid unnecessary wastage of precious resources and mis-use of masks (see Advice on the use of masks).The most effective ways to protect yourself and others against COVID-19 are to frequently clean your hands, cover your cough with the bend of elbow or tissue and maintain a distance of at least 1 meter (3 feet) from people who are coughing or sneezing. See basic protective measures against the new coronavirus for more information."},
{id:'13',title:"Can people who recover from Covid-19 be infected again?",content:"We know that for similar coronaviruses, infected people are unlikely to be re-infected shortly after they recover. However, because the immune response to COVID-19 is not yet understood, it is not yet known whether similar immune protection will be observed for patients who have recovered from COVID-19"},
{id:'14',title:"How can I get tested for Covid-19?",content:"If you are well, no testing is recommended. If you are experiencing symptoms of COVID-19, you should immediately isolate yourself from others. Call your local UN clinic/medical facility to inform them of your condition and relevant travel/exposure history. If you had been identified as a close contact of a case by the local Ministry of Health or WHO, please also indicate this. From here you will be advised if a medical assessment is necessary and how to get tested."},]

export default function FAQ() {
    return (
      <View style={{flex:1,backgroundColor:"white",marginTop:80,borderTopWidth:.3,borderColor:"black"}}>
       <FlatList style={{padding:10}} data={Data} keyExtractor={item=>item.id} renderItem={({item})=> <View_1 title={item.title} content={item.content}/>} showsVerticalScrollIndicator={false}/>
      </View>
    );
  }

