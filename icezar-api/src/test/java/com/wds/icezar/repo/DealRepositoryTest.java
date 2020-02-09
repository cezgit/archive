package com.wds.icezar.repo;


import com.wds.icezar.domain.Deal;
import org.apache.commons.collections4.IterableUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static java.util.Arrays.asList;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.greaterThanOrEqualTo;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DealRepositoryTest {

    @Autowired
    private DealRepository dealRepository;

    private Logger logger = LogManager.getLogger();

    @Test
    public void findAll(){

        List<Deal> deals = dealRepository.findAll();
        assertThat(deals.size(), greaterThanOrEqualTo(1));
    }

    @Test
    public void findAllByIds(){

        String id = "5c2959597c183e425b3dae86";
        Iterable<String> ids = asList(id);
        Iterable<Deal> deals = dealRepository.findAllById(ids);
        assertThat(IterableUtils.toList(deals).size(), greaterThanOrEqualTo(1));
    }
}
