package com.wds.support.test.springboot;

import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

//@RunWith(SpringJUnit4ClassRunner.class)
@RunWith(SpringRunner.class)
@SpringBootTest(classes = TestRepositoryConfig.class)
@TestPropertySource(locations="classpath:test.properties")
@Transactional
public abstract class RepositoryTest<T> {

}
